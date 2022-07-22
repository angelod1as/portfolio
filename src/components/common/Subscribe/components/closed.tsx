import { Link } from '#components/common/Links'
import { Strong } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'

export const Closed = () => {
  const { colors } = useColorContext()

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
