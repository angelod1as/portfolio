import Page, { PageProps } from '@sections/page'
import fetchContentful from '@functions/fetchContentful'
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

  const localizedPaths = [
    ...paths.map(path => ({ ...path, locale: 'en' })),
    ...paths.map(path => ({ ...path, locale: 'pt' })),
  ]

  return { paths: localizedPaths, fallback: true }
}

export async function getStaticProps({ params, locale }) {
  const query = await fetchContentful<ITileFields>({
    type: 'project',
    locale: locale,
  })

  const content = query.content.find(item => {
    return item.fields.slug === params.slug
  })
  return { props: { content: { fields: { content } } } }
}

export default AboutGenerator
