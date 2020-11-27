import Page from '@sections/page'
import { fetchContent } from '@build/fetchGraphQL'
import { ITileFields } from 'src/@types/generated/contentful'
import fetchContentful from '@build/fetchContentful'

function PageGenerator({ content }: { content: ITileFields }) {
  return <Page content={content} />
}

interface QueryProps {
  tileCollection: {
    items: ITileFields[]
  }
}

export async function getStaticPaths() {
  const query: QueryProps = await fetchContent(`
  {
    tileCollection{
      items {
        title
        slug
        type
        cloudinary
        content {
          json
        }
      } 
    }
  }
  `)

  const paths = query.tileCollection.items.map((item) => {
    return {
      params: { slug: item.slug, item },
    }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const query: QueryProps = await fetchContent(`
  {
    tileCollection{
      items {
        title
        slug
        type
        cloudinary
        content {
          json
        }
      } 
    }
  }
  `)
  const tiles = query.tileCollection.items
  const content = tiles.find((item) => item.slug === params.slug)
  return { props: { content } }
}

export default PageGenerator
