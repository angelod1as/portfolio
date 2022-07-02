import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { FCC } from '#types/types'
import React from 'react'
import { Link } from '../Links'

export type CTAProps = {
  title?: string
  inner?: boolean
  href: string | undefined | null
  disabled?: boolean
}

export const CTA: FCC<CTAProps> = ({ children, title, href, disabled }) => {
  const { colors } = useColorContext()

  const content = (
    <div
      className={`border-4 bg-black ${
        disabled ? 'border-gray-600' : colors.borderColor
      } ${
        disabled ? 'text-gray-600' : colors.textColor
      } text-center px-2 py-2 font-bold`}
    >
      {title && <h3 className="font-normal">{title}</h3>}
      <span className="not-italic">{children}</span>
    </div>
  )

  return (
    <div className="relative flex justify-center w-full">
      {href ? (
        <Link href={href} className="w-full decoration-transparent">
          {content}
        </Link>
      ) : (
        <div className="w-full">{content}</div>
      )}
    </div>
  )
}
