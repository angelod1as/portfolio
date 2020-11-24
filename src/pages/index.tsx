import Home from '@sections/home/index'
import getData from '@utils/getData'

export interface TileProp {
  id: string
  noIDo: boolean
  order: number
  title: string
  type: string
  redir?: string
}

export default function Index({ homeData }: { homeData: TileProp[] }) {
  return <Home homeData={homeData} />
}

export async function getStaticProps() {
  const homeData = getData<TileProp[]>({ type: 'home' })
  return {
    props: {
      homeData: homeData,
    },
  }
}
