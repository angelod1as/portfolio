import type { GetStaticProps, NextPage } from 'next'
import { randomColors, RandomColors } from 'src/helpers/colors'

const HomePage: NextPage = () => {
  return <>SVG</>
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
