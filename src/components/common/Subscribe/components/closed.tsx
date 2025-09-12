import { Link } from '#components/common/Links'
import { Strong } from '#components/common/Strong'

export const Closed = () => {
  return (
    <div>
      <h2 className={`mb-10`}>
        <span className="text-highlight">Subscribe</span> to my blog
        <p>
          Oops, subscriptions are <Strong>closed</Strong> for now.{' '}
          <Link inner href="/blog/about-subscription">
            read here to know more.
          </Link>
        </p>
      </h2>
    </div>
  )
}
