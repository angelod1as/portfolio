import React, { ReactNode } from 'react'
import { Link } from '../Links'

export type CTAProps = {
  title?: string
  content?: ReactNode
  inner?: boolean
  href: string | undefined | null
  disabled?: boolean
  mdx?: boolean
}

export const CTA = ({
  title,
  href,
  disabled,
  content,
  mdx,
  inner,
}: CTAProps) => {
  const finalContent = (
    <button
      className={`
      border-4 bg-black block w-full text-center px-2 py-2 font-bold cursor-pointer
      ${disabled ? 'border-gray-600' : 'border-highlight'}
      ${disabled ? 'text-gray-600' : 'text-highlight'}
      `}
    >
      {title && <h3 className="font-normal">{title}</h3>}
      <span className="not-italic CTA">{content}</span>
    </button>
  )

  return (
    <div className="relative flex justify-center w-full cursor-pointer">
      {href ? (
        <Link
          href={href}
          className={`${mdx ? 'mt-3 mb-6' : ''} w-full decoration-transparent`}
          inner={inner}
        >
          {finalContent}
        </Link>
      ) : (
        <div className="w-full">{finalContent}</div>
      )}
    </div>
  )
}
