import { Link } from '@remix-run/react'
import { RemixLinkProps } from '@remix-run/react/components'
import type { HTMLAttributes, AnchorHTMLAttributes } from 'react'

const H1 = (props: HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className="text-2xl" {...props} />
)
const H2 = (props: HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className="text-2xl" {...props} />
)

const Strong = (props: HTMLAttributes<HTMLElement>) => (
  <strong className="text-yellow-500" {...props} />
)

const A = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
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
