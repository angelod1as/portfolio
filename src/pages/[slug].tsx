import Page from '@sections/page'
import { ITileFields } from 'src/@types/generated/contentful'
import fetchContentful from '@build/fetchContentful'

function PageGenerator({ content }: { content: ITileFields }) {
  return <Page content={content} />
}

export async function getStaticPaths() {
  const tiles = await fetchContentful<ITileFields>({ type: 'tile' })

  const paths = tiles.map((item) => {
    return {
      params: { slug: item.fields.slug },
    }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const tiles = await fetchContentful<ITileFields>({ type: 'tile' })

  const content = tiles.find((item) => item.fields.slug === params.slug)
  return { props: { content } }
}

export default PageGenerator
