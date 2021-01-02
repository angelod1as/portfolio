import Page, { PageProps } from '@sections/page'
import { ITileFields } from 'src/@types/generated/contentful'
import fetchContentful from '@functions/fetchContentful'
import NewHead from '@components/atoms/NewHead'

function PageGenerator({ content, items }: PageProps) {
  if (content) {
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
  return <div>Content not found</div>
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

  // This is how Localization works on vanilla nextjs
  // It even generates the paths automatically
  const localizedPaths = [
    ...paths.map(path => ({ ...path, locale: 'en' })),
    ...paths.map(path => ({ ...path, locale: 'pt' })),
  ]

  return { paths: localizedPaths, fallback: false }
}

export async function getStaticProps({ params, locale }) {
  const query = await fetchContentful<ITileFields>({
    type: 'tile',
    tag: params.slug,
    locale: locale,
  })

  const content = query.content.find(item => item.fields.slug === params.slug)

  const { items } = query

  return { props: { content, items } }
}

export default PageGenerator
