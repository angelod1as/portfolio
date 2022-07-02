import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { FCC } from '#types/types'
import React from 'react'
import { Link } from '../Links'

export type CTAProps = {
  title?: string
  inner?: boolean
  href: string
}

export const CTA: FCC<CTAProps> = ({ children, title, href }) => {
  const { colors } = useColorContext()

  return (
    <div className="relative flex justify-center w-full">
      <Link href={href} className="w-full decoration-transparent">
        <div
          className={`border-4 bg-black ${colors.borderColor} ${colors.textColor} text-center px-2 py-2 font-bold`}
        >
          {title && <h3 className="font-normal">{title}</h3>}
          <span className="not-italic">{children}</span>
        </div>
      </Link>
    </div>
  )
}
