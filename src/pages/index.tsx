import fetchContentful from '@functions/fetchContentful'
import Home from '@sections/home/index'
import LocaleSwitcher from '@components/atoms/LocaleSwitcher'

export default function Index({ homeData }) {
  return (
    <>
      <LocaleSwitcher />
      <Home homeData={homeData} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const items = await fetchContentful({ type: 'tile', locale })

  return {
    props: {
      homeData: items,
    },
  }
}
