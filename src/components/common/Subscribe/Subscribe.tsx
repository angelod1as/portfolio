import { useColorContext } from '#components/templates/Providers/ColorProvider'
import {
  textColor as defaultTextColor,
  bgColor as defaultBgColor,
  borderColor as defaultBorderColor,
} from 'src/helpers/colors'
import { Link } from '../Links'
import { Strong } from '../Strong'

type SubscribeProps = {
  inner?: boolean
  closed?: boolean
}

export const Subscribe = ({ inner, closed }: SubscribeProps) => {
  const { colors } = useColorContext()
  const textColor = colors?.textColor ?? defaultTextColor[0]
  const bgColor = colors?.bgColor ?? defaultBgColor[0]
  const borderColor = colors?.borderColor ?? defaultBorderColor[0]

  if (closed) {
    return (
      <div>
        <h2 className={`mb-10`}>
          <span className={colors.textColor}>Subscribe</span> to my blog
          <p>
            Oops, subscriptions are{' '}
            <Strong color={colors.textColor}>closed</Strong> for now.{' '}
            <Link inner href="/blog/about-subscription">
              read here to know more.
            </Link>
          </p>
        </h2>
      </div>
    )
  }

  return (
    <form
      action="https://gmail.us5.list-manage.com/subscribe/post?u=f065fa9f835273f5a59e75667&amp;id=821625a73a"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <h2 className={`${inner ? '' : 'mb-4 h2-as-h1'}`}>
        <span className={textColor}>Subscribe</span> to my blog
      </h2>

      <p className={`${inner ? 'mb-4' : 'mb-4'}`}>
        <small>
          Very ocasional, 100% not spammy, just general updates and new articles
        </small>
      </p>

      <div hidden={true}>
        <input type="hidden" name="tags" defaultValue={6659457} />
      </div>

      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
      <div className="absolute left-[-5000px]" aria-hidden="true">
        <input
          type="text"
          name="b_f065fa9f835273f5a59e75667_821625a73a"
          tabIndex={-1}
          defaultValue=""
        />
      </div>

      <div className="flex items-center gap-4 mb-8">
        <label htmlFor="mce-EMAIL">Email:</label>
        <input
          type="email"
          defaultValue=""
          name="EMAIL"
          className="w-full"
          id="mce-EMAIL"
          placeholder="mrspock@enterprise.com"
        />
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          className={`${bgColor} ${borderColor}`}
        />
      </div>
    </form>
  )
}
