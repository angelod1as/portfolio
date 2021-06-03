import NewHead from '@components/atoms/NewHead'
import fetchNotion, { NotionProps } from '@functions/fetchNotion'
import DoingPage from '@sections/doing'

export type DoingProps = {
  cards: {
    todo: Array<NotionProps>
    doing: Array<NotionProps>
    done: Array<NotionProps>
    later: Array<NotionProps>
    waiting: Array<NotionProps>
    dropped: Array<NotionProps>
  }
}

function Doing({ cards }: DoingProps) {
  return (
    <>
      <NewHead title="Doing" description="Desciption" />
      <DoingPage {...{ cards }} />
    </>
  )
}

export async function getStaticProps() {
  const items = await fetchNotion()

  return {
    props: {
      cards: {
        todo: items.filter(item => item?.status.toLowerCase() === 'to do'),
        doing: items.filter(item => item?.status.toLowerCase() === 'doing'),
        done: items.filter(item => item?.status.toLowerCase() === 'done'),
        later: items.filter(item => item?.status.toLowerCase() === 'later'),
        waiting: items.filter(item => item?.status.toLowerCase() === 'waiting'),
        dropped: items.filter(item => item?.status.toLowerCase() === 'dropped'),
      },
    },
  }
}

export default Doing
