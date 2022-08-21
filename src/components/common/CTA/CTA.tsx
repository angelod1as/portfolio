import { useColorContext } from '#components/templates/Providers/ColorProvider'
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
  const { colors } = useColorContext()

  const finalContent = (
    <div
      className={`border-4 bg-black
      ${disabled ? 'border-gray-600' : colors.borderColor}
      ${disabled ? 'text-gray-600' : colors.textColor}
      text-center px-2 py-2 font-bold`}
    >
      {title && <h3 className="font-normal">{title}</h3>}
      <span className="not-italic CTA">{content}</span>
    </div>
  )

  return (
    <div className="relative flex justify-center w-full">
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
