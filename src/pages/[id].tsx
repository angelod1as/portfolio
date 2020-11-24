import getData from '@lib/getData'

import { TileProp } from './index'

function Mosaic({ project }: { project: TileProp }) {
  return <div>Teste de Projeto</div>
}

export async function getStaticPaths() {
  const projects = getData<TileProp[]>({ type: 'home' })

  const paths = projects.map((item) => ({
    params: { id: item.id },
  }))

  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const projects = getData<TileProp[]>({ type: 'home' })
  const project = projects.filter((item) => item.id === params.id)
  return { props: { project } }
}

export default Mosaic
