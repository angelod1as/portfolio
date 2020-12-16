import Page from '@sections/page'
import { IProject, ITileFields } from 'src/@types/generated/contentful'
import fetchContentful from '@build/fetchContentful'

interface PageGeneratorProps {
  content: {
    fields: {
      type: string
      content: IProject
    }
  }
}

function PageGenerator({ content }: PageGeneratorProps) {
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
