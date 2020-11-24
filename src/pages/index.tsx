import Index from 'src/components/sections/index/index'
import getData from '@lib/getData'

export interface TileProp {
  id: string
  noIDo: boolean
  order: number
  title: string
  type: string
  redir?: string
}

export default function Home({ homeData }: { homeData: TileProp[] }) {
  return <Index homeData={homeData} />
}

export async function getStaticProps() {
  const homeData = getData<TileProp[]>({ type: 'home' })
  return {
    props: {
      homeData: homeData,
    },
  }
}
