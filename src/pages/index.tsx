import { Home } from '#components/pages/Home'
import type { GetStaticProps, NextPage } from 'next'

const HomePage: NextPage = () => {
  return <Home />
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { slug: 'homepage' },
  }
}
