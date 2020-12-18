import Page from '@sections/page'
import fetchContentful from '@build/fetchContentful'
import { useRouter } from 'next/router'
import { ITileFields } from 'src/@types/generated/contentful'

function AboutGenerator({
  content,
}: {
  content: {
    fields: {
      type: string
      title: string
    }
  }
}) {
  return <Page content={content} />
}

export async function getStaticPaths() {
  const query = await fetchContentful<ITileFields>({ type: 'project' })

  const paths = query.map(item => {
    return {
      params: { slug: item.fields.slug },
    }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const query = await fetchContentful<ITileFields>({
    type: 'project',
    slug: params.slug,
  })
  console.log(query)

  const content = query.find(item => item.fields.slug === params.slug)
  return { props: { content } }
}

export default AboutGenerator
