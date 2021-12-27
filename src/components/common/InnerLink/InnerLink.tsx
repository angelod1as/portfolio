import Link, { LinkProps } from 'next/link'
import React, { FC } from 'react'

type Props =
  | Omit<LinkProps, 'href'> & {
      href: string
      block?: boolean
    }

export const InnerLink: FC<Props> = ({
  href,
  children,
  block = false,
  ...rest
}) => {
  return (
    <Link href={href} passHref {...rest}>
      <a
        href={href}
        className={`${
          block ? 'hover:scale-[0.98]' : 'hover:scale-95'
        } transition-transform italic font-bold`}
      >
        {children}
      </a>
    </Link>
  )
}
