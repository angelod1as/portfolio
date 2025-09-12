import { Closed } from './components/closed'
import { Rss } from './components/rss'
import { Substack } from './components/substack'

type SubscribeProps = {
  blog?: boolean
  closed?: boolean
  succint?: boolean
}

export const Subscribe = ({ blog, closed, succint }: SubscribeProps) => {
  if (closed) {
    return <Closed />
  }

  return (
    <div>
      <Substack blog={blog} succint={succint} />
      {blog && <Rss />}
    </div>
  )
}
