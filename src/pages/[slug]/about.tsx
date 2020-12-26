import Page, { PageProps } from '@sections/page'
import fetchContentful from '@build/fetchContentful'
import { ITileFields } from 'src/@types/generated/contentful'
import NewHead from '@components/atoms/NewHead'

function AboutGenerator({ content }: PageProps) {
  return (
    <>
      <NewHead
        title={content?.fields?.content?.fields?.title}
        description={content?.fields?.content?.fields?.description}
      />
      <Page content={content} />
    </>
  )
}

export async function getStaticPaths() {
  const query = await fetchContentful<ITileFields>({ type: 'project' })

  const paths = query.content.map(item => {
    return {
      params: { slug: item.fields.slug },
    }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const query = await fetchContentful<ITileFields>({
    type: 'project',
  })

  const content = query.content.find(item => item.fields.slug === params.slug)
  return { props: { content: { fields: { content } } } }
}

export default AboutGenerator
