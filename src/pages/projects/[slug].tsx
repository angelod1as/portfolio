import fetchContentful from '@build/fetchContentful'
import { IProject, IProjectFields } from 'src/@types/generated/contentful'

function ProjectGenerator({ content }: { content: IProject }) {
  return <div>Teste de Projeto</div>
}

export async function getStaticPaths() {
  const query = await fetchContentful<IProjectFields>({ type: 'project' })

  const paths = query.map((item) => {
    return {
      params: { slug: item.fields.slug },
    }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const query = await fetchContentful<IProjectFields>({ type: 'project' })

  const content = query.find((item) => item.fields.slug === params.slug)
  return { props: { content } }
}

export default ProjectGenerator
