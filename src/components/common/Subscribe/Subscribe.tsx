import { Closed } from './components/closed'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { textColor as defaultTextColor } from 'src/helpers/colors'
import { Substack } from './components/customSubstackWidget'

type SubscribeProps = {
  inner?: boolean
  closed?: boolean
}

export const Subscribe = ({ inner, closed }: SubscribeProps) => {
  const { colors } = useColorContext()
  const textColor = colors?.textColor ?? defaultTextColor[0]

  if (closed) {
    return <Closed />
  }

  return (
    <div>
      <h2 className={`${inner ? '' : 'mb-4 h2-as-h1'}`}>
        <span className={textColor}>Subscribe</span> to my blog
      </h2>

      <p className={`${inner ? 'mb-4' : 'mb-4'}`}>
        <small>
          Very ocasional, 100% not spammy, just general updates and new articles
        </small>
      </p>

      <Substack />
    </div>
  )
}
