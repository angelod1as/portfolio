import fetchContentful from '@functions/fetchContentful'
import Home from '@sections/home/index'

export default function Index({ homeData }) {
  return (
    <>
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
