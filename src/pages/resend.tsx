import { Resend } from '#components/pages/Resend/Resend'
import type { GetStaticProps, NextPage } from 'next'

const ResendPage: NextPage = () => {
  return <Resend />
}

export default ResendPage

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { slug: 'resend' },
  }
}
