import { Closed } from './components/closed'
import { Substack } from './components/substack'

type SubscribeProps = {
  inner?: boolean
  closed?: boolean
}

export const Subscribe = ({ inner, closed }: SubscribeProps) => {
  if (closed) {
    return <Closed />
  }

  return (
    <div>
      <Substack inner={inner} />
    </div>
  )
}
