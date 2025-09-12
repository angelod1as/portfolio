import type { GetStaticProps, NextPage } from 'next'

const ServerError: NextPage = () => {
  return <div>500</div>
}

export default ServerError

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
