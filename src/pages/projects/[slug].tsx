import Page, { PageProps } from '@sections/page'
import fetchContentful from '@functions/fetchContentful'
import { IProjectFields } from 'src/@types/generated/contentful'
import makeSafeDate from '@components/utils/makeSafeDate'
import NewHead from '@components/atoms/NewHead'

function ProjectGenerator({ content }: PageProps) {
  if (content) {
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
  return <div>Content not found</div>
}

export async function getStaticPaths() {
  const query = await fetchContentful<IProjectFields>({ type: 'project' })

  const paths = query.content.map(item => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  const localizedPaths = [
    ...paths.map(path => ({ ...path, locale: 'en' })),
    ...paths.map(path => ({ ...path, locale: 'pt' })),
  ]

  return { paths: localizedPaths, fallback: true }
}

export async function getStaticProps({ params, locale }) {
  const query = await fetchContentful<IProjectFields>({
    type: 'project',
    locale: locale,
  })

  const content = query.content.find(item => item.fields.slug === params.slug)

  const date = new Date(content.fields.date)
  content.fields.safeDate = makeSafeDate(date)

  return { props: { content: { fields: { content } } } }
}

export default ProjectGenerator
