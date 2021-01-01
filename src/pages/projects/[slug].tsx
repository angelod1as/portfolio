import Page, { PageProps } from '@sections/page'
import fetchContentful from '@functions/fetchContentful'
import { IProjectFields } from 'src/@types/generated/contentful'
import makeSafeDate from '@components/utils/makeSafeDate'
import NewHead from '@components/atoms/NewHead'

function ProjectGenerator({ content }: PageProps) {
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
  const query = await fetchContentful<IProjectFields>({ type: 'project' })

  const paths = query.content.map(item => {
    return {
      params: { slug: item.fields.slug },
    }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const query = await fetchContentful<IProjectFields>({ type: 'project' })

  const content = query.content.find(item => item.fields.slug === params.slug)

  const date = new Date(content.fields.date)
  content.fields.safeDate = makeSafeDate(date)

  return { props: { content: { fields: { content } } } }
}

export default ProjectGenerator
