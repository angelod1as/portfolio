import Page, { PageProps } from '@sections/page'
import { ITileFields } from 'src/@types/generated/contentful'
import fetchContentful from '@build/fetchContentful'
import makeSafeDate from '@components/utils/makeSafeDate'
import NewHead from '@components/atoms/NewHead'

function PageGenerator({ content, items }: PageProps) {
  return (
    <>
      <NewHead
        title={content?.fields?.content?.fields?.title}
        description={content?.fields?.content?.fields?.description}
      />
      <Page content={content} items={items} />
    </>
  )
}

export async function getStaticPaths() {
  const query = await fetchContentful<ITileFields>({ type: 'tile' })

  const paths = query.content
    .filter(item => {
      return !item.fields.internalRedirect
    })
    .map(item => {
      return {
        params: { slug: item.fields.slug },
      }
    })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const query = await fetchContentful<ITileFields>({
    type: 'tile',
    tag: params.slug,
  })

  const content = query.content.find(item => item.fields.slug === params.slug)

  const dateSafeItems = query.items.map(each => {
    const date = new Date(each.fields.date)
    const safeDate = makeSafeDate(date)
    return {
      ...each,
      fields: {
        ...each.fields,
        safeDate: safeDate,
      },
    }
  })

  const items = dateSafeItems

  return { props: { content, items } }
}

export default PageGenerator
