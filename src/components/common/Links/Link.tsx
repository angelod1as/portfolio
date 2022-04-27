import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React, { FC } from 'react'

export type LinkProps =
  | Omit<NextLinkProps, 'href'> & {
      href?: string
      block?: boolean
      inner?: boolean
      className?: string
      image?: boolean
    }

export const Link: FC<LinkProps> = ({
  href,
  children,
  block = false,
  inner = false,
  className = '',
  image = false,
  ...rest
}) => {
  const blankProps = inner
    ? {}
    : {
        target: '_blank',
        rel: 'noreferrer',
      }

  const Anchor = (
    <a
      {...blankProps}
      href={href}
      className={`${className} ${
        block ? 'hover:scale-[0.98]' : 'hover:scale-95 inline-block'
      } transition-transform italic font-bold cursor-pointer`}
    >
      {!image && '<'}
      {children}
      {!image && '>'}
    </a>
  )

  if (inner && href) {
    return (
      <NextLink href={href} passHref {...rest}>
        {Anchor}
      </NextLink>
    )
  }

  return Anchor
}
