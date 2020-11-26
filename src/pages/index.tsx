import { fetchContent } from '@build/fetchContent'
import Home from '@sections/home/index'

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
  const homeData = await fetchContent(`
  {
    tileCollection{
      items {
        slug
        title
        order
        hasido
        redir
      }
    }
  }
  `)
  return {
    props: {
      homeData: homeData.tileCollection.items,
    },
  }
}
