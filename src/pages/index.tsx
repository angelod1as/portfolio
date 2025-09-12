import { Home } from '#components/pages/Home'
import type { GetStaticProps, NextPage } from 'next'

const HomePage: NextPage = () => {
  return <Home />
}

export default HomePage

type GetStaticPropsType = {}

export const getStaticProps: GetStaticProps<GetStaticPropsType> = async () => {
  return {
    props: { slug: 'homepage' },
  }
}
