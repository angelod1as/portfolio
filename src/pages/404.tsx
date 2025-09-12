import type { GetStaticProps, NextPage } from 'next'

const NotFound: NextPage = () => {
  return <div>404</div>
}

export default NotFound

type GetStaticPropsType = {}

export const getStaticProps: GetStaticProps<GetStaticPropsType> = async () => {
  return {
    props: {},
  }
}
