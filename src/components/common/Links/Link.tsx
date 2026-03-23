import { FCC } from '#types/types'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = Omit<NextLinkProps, 'href'> & {
  download?: boolean
  href: string | null
  block?: boolean
  inner?: boolean
  className?: string
}

export const Link: FCC<LinkProps> = ({
  href,
  children,
  block = false,
  inner = false,
  className = '',
  ...rest
}) => {
  if (!href) return <>{children}</>

  const isAnchor = href.startsWith('#')
  const isInner = inner || href.startsWith('/')
  const linkProps =
    isAnchor || isInner
      ? {}
      : {
          target: '_blank',
          rel: 'noreferrer',
        }

  const sharedClassName = `
      ${className}
      ${block ? 'hover:scale-[0.98]' : 'hover:scale-95 inline-block'}
      ${isAnchor ? 'anchor' : 'italic'}
      font-bold cursor-pointer transition-transform
      `

  if (isInner) {
    return (
      <NextLink href={href} className={sharedClassName} {...rest}>
        {children}
      </NextLink>
    )
  }

  return (
    <a {...rest} {...linkProps} href={href} className={sharedClassName}>
      {children}
    </a>
  )
}
