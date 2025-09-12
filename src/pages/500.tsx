import type { GetStaticProps, NextPage } from 'next'

const ServerError: NextPage = () => {
  return <div>500</div>
}

export default ServerError

type GetStaticPropsType = {}

export const getStaticProps: GetStaticProps<GetStaticPropsType> = async () => {
  return {
    props: {},
  }
}
