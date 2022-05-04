import React, { ReactNode } from 'react'
import { RandomColors } from 'src/helpers/colors'
import { Link } from '../Links'

export type CTAProps = {
  title?: string
  children: ReactNode
  inner?: boolean
  href: string
  colors: RandomColors
}

export const CTA = ({ children, title, href, colors }: CTAProps) => {
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
