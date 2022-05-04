import type { GetStaticProps, NextPage } from 'next'
import { randomColors, RandomColors } from 'src/helpers/colors'

const ServerError: NextPage = () => {
  return <div>500</div>
}

export default ServerError

type GetStaticPropsType = {
  colors: RandomColors
}

export const getStaticProps: GetStaticProps<GetStaticPropsType> = async () => {
  const colors = randomColors()

  return {
    props: { colors },
  }
}
