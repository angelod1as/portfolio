import Page from '@sections/page'
import { ITile, ITileFields } from 'src/@types/generated/contentful'
import fetchContentful from '@build/fetchContentful'

function PageGenerator({ content }: { content: ITile }) {
  return <Page content={content} />
}

export async function getStaticPaths() {
  const query = await fetchContentful<ITileFields>({ type: 'tile' })

  const paths = query.map((item) => {
    return {
      params: { slug: item.fields.slug },
    }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const query = await fetchContentful<ITileFields>({ type: 'tile' })

  const content = query.find((item) => item.fields.slug === params.slug)
  return { props: { content } }
}

export default PageGenerator
