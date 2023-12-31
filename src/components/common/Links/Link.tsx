import { FCC } from '#types/types'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

export type LinkProps =
  | Omit<NextLinkProps, 'href'> & {
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

  const Anchor = (
    <a
      {...rest}
      {...linkProps}
      href={href}
      className={`
      ${className}
      ${block ? 'hover:scale-[0.98]' : 'hover:scale-95 inline-block'}
      ${isAnchor ? 'anchor' : 'italic'}
      font-bold cursor-pointer transition-transform
      `}
    >
      {children}
    </a>
  )

  if (inner) {
    return (
      <NextLink href={href} passHref {...rest}>
        {Anchor}
      </NextLink>
    )
  }

  return Anchor
}
