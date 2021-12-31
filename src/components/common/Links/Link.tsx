import NextLink, { LinkProps } from 'next/link'
import React, { FC } from 'react'

type Props =
  | Omit<LinkProps, 'href'> & {
      href: string
      block?: boolean
      inner?: boolean
      blank?: boolean
      className?: string
    }

export const Link: FC<Props> = ({
  href,
  children,
  block = false,
  inner = false,
  blank = false,
  className = '',
  ...rest
}) => {
  const blankProps = blank
    ? {
        target: '_blank',
        rel: 'noreferrer',
      }
    : {}

  const Anchor = (
    <a
      {...blankProps}
      href={href}
      className={`${className} ${
        block ? 'hover:scale-[0.98]' : 'hover:scale-95'
      } transition-transform italic font-bold`}
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
