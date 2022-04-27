import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { BgColor } from 'src/helpers/colors'

export type CTAProps = {
  title?: string
  children: ReactNode
  bgColor?: BgColor
  inner?: boolean
  href: string
}

export const CTA = ({ children, bgColor, title, href, inner }: CTAProps) => {
  const { push } = useRouter()
  const bg = bgColor ?? ''
  const text = bgColor?.includes('bg-yellow') ? 'text-black' : 'text-white'

  const handleClick = async () => {
    if (inner) {
      return await push(href)
    }
    return window.open(href, '_blank', 'noopener')
  }

  return (
    <div className="flex justify-center w-full">
      <button
        className={`${bg} ${text} w-full p-4 hover:scale-[0.98] transition-transform font-bold rounded-lg`}
        onClick={handleClick}
      >
        {title && <h3>{title}</h3>}
        <p>{children}</p>
      </button>
    </div>
  )
}
