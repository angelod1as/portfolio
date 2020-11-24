import getData from '@lib/getData'

interface ProjectData {
  id: string
  date: string
  title: string
  desc: string
  live?: string
  tags: string[]
  image: string
}

interface ProjectsProps {
  project: ProjectData[]
}

function Project({ project }: ProjectsProps) {
  return <div>Teste de Projeto</div>
}

export async function getStaticPaths() {
  const projects = getData<ProjectData[]>({ type: 'projects' })

  const paths = projects.map((item) => ({
    params: { id: item.id },
  }))

  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const projects = getData<ProjectData[]>({ type: 'projects' })
  const project = projects.filter((item) => item.id === params.id)
  return { props: { project } }
}

export default Project
