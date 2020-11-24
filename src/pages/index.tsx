import Index from 'src/components/sections/index/index'
import getHomeData from '@lib/getHomeData'

export default function Home({ homeData }) {
  return <Index homeData={homeData} />
}

export async function getStaticProps() {
  const homeData = getHomeData()
  return {
    props: {
      homeData: homeData,
    },
  }
}
