import { FCC } from '#types/types'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

export type LinkProps =
  | Omit<NextLinkProps, 'href'> & {
      href: string
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
  const isAnchor = href.startsWith('#')
  const linkProps =
    isAnchor || inner
      ? {}
      : {
          target: '_blank',
          rel: 'noreferrer',
        }

  const Anchor = (
    <a
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
