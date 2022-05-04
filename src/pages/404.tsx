import type { GetStaticProps, NextPage } from 'next'
import { randomColors, RandomColors } from 'src/helpers/colors'

const NotFound: NextPage = () => {
  return <div>404</div>
}

export default NotFound

type GetStaticPropsType = {
  colors: RandomColors
}

export const getStaticProps: GetStaticProps<GetStaticPropsType> = async () => {
  const colors = randomColors()

  return {
    props: { colors },
  }
}
