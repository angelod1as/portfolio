import NewHead from '@components/atoms/NewHead'
import fetchNotion, { NotionProps } from '@functions/fetchNotion'
import DoingPage from '@sections/page/doing'

type DoingProps = {
  items: NotionProps
}

function Doing({ items }: DoingProps) {
  return (
    <>
      <NewHead title="Doing" description="Desciption" />
      <DoingPage items={items} />
    </>
  )
}

export async function getStaticProps() {
  const items = await fetchNotion()

  return {
    props: {
      items,
    },
  }
}

export default Doing
