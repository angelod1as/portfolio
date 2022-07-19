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
  const linkProps =
    href.includes('#') || inner
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
      transition-transform italic font-bold cursor-pointer`}
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
