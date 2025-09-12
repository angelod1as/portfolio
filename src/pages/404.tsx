import type { GetStaticProps, NextPage } from 'next'

const NotFound: NextPage = () => {
  return <div>404</div>
}

export default NotFound

type GetStaticPropsType = Record<string, never>

export const getStaticProps: GetStaticProps<GetStaticPropsType> = async () => {
  return {
    props: {},
  }
}
