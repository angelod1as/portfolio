import Page, { PageProps } from '@sections/page'
import { ITileFields } from 'src/@types/generated/contentful'
import fetchContentful from '@build/fetchContentful'

function PageGenerator({ content, items }: PageProps) {
  return <Page content={content} items={items} />
}

export async function getStaticPaths() {
  const query = await fetchContentful<ITileFields>({ type: 'tile' })

  const paths = query.content.map(item => {
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
    const locale = 'en'
    const date = new Date(each.fields.date)
    const options = {
      dateStyle: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }
    const safeDate = new Intl.DateTimeFormat(locale, options).format(date)
    return {
      ...each,
      fields: {
        ...each.fields,
        date: safeDate,
      },
    }
  })

  const items = dateSafeItems

  return { props: { content, items } }
}

export default PageGenerator
