import type { GetStaticProps, NextPage } from 'next'
import { Home } from '#components/pages/Home'
import { randomColors, RandomColors } from 'src/helpers/colors'

const HomePage: NextPage = () => {
  return <Home />
}

export default HomePage

type GetStaticPropsType = {
  colors: RandomColors
}

export const getStaticProps: GetStaticProps<GetStaticPropsType> = async () => {
  const colors = randomColors()

  return {
    props: { colors, slug: 'homepage' },
  }
}
