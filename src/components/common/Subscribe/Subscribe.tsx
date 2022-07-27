import { Closed } from './components/closed'
import { Rss } from './components/rss'
import { Substack } from './components/substack'

type SubscribeProps = {
  blog?: boolean
  closed?: boolean
}

export const Subscribe = ({ blog, closed }: SubscribeProps) => {
  if (closed) {
    return <Closed />
  }

  return (
    <div>
      <Substack blog={blog} />
      {blog && <Rss />}
    </div>
  )
}
