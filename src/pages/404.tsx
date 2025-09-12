import type { GetStaticProps, NextPage } from 'next'

const NotFound: NextPage = () => {
  return <div>404</div>
}

export default NotFound

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
