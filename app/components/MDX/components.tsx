import { Link } from '@remix-run/react'
import type { HTMLAttributes, AnchorHTMLAttributes } from 'react'

type heading = HTMLAttributes<HTMLHeadingElement>
type element = HTMLAttributes<HTMLElement>
type anchor = AnchorHTMLAttributes<HTMLAnchorElement>

const H1 = (props: heading) => <h1 {...props} />

const H2 = (props: heading) => <h2 className="h2-as-h1" {...props} />

const Strong = (props: element) => (
  <strong className="text-yellow-500" {...props} />
)

const A = (props: anchor) => {
  const isExternalLink = ['https', 'http', 'www', '.com'].some((item) =>
    props.href?.includes(item)
  )

  const linkClassname = 'text-blue-500 font-bold italic hover:text-blue-400'

  if (isExternalLink) {
    return (
      <a
        {...props}
        className={linkClassname}
        target="_blank"
        rel="noopener noreferrer"
      >
        {'<'}
        {props.children}
        {'>'}
      </a>
    )
  }

  return (
    <Link to={props.href || ''} prefetch="intent" className={linkClassname}>
      {'<'}
      {props.children}
      {'>'}
    </Link>
  )
}

export const components = {
  h1: H1,
  h2: H2,
  strong: Strong,
  a: A,
}
