import { useColorContext } from '#components/templates/Providers/ColorProvider'
import React, { useEffect, useState } from 'react'

export const ProgressBar = () => {
  const [width, setWidth] = useState(0)

  const scrollHeight = () => {
    const el = document.documentElement
    const ScrollTop = el.scrollTop || document.body.scrollTop
    const ScrollHeight = el.scrollHeight || document.body.scrollHeight
    const percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100
    setWidth(percent)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeight)
    return () => window.removeEventListener('scroll', scrollHeight)
  }, [])

  const { colors } = useColorContext()
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-1">
      <div
        style={{ width: `${width}%` }}
        className={`h-full ${colors.bgColor}`}
      />
    </div>
  )
}
