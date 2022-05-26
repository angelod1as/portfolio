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

  const text = colors.bgColor?.includes('bg-yellow')
    ? 'text-black'
    : 'text-white'

  return (
    <div className="flex justify-center w-full">
      <Link
        href={href}
        className={`${colors.bgColor} ${text} decoration-transparent text-center w-full p-4 hover:scale-[0.98] transition-transform font-bold rounded-lg`}
      >
        {title && <h3>{title}</h3>}
        <span className="font-normal">{children}</span>
      </Link>
    </div>
  )
}
