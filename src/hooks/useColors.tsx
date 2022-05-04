import { useEffect, useState } from 'react'
import { BgColor, randomColors, TextColor } from 'src/helpers/colors'

const textColor = randomColors().textColor
const bgColor = randomColors().bgColor

export const useColors = (color?: string) => {
  const [colors, setColors] = useState({
    textColor,
    bgColor,
  })

  useEffect(() => {
    if (color) {
      const bgColorIndex = bgColor.indexOf(`bg-${color}`)
      const textColorIndex = textColor.indexOf(`text-${color}`)
      const bgColorString = bgColorIndex >= 0 ? bgColor[bgColorIndex] : bgColor
      const textColorString =
        textColorIndex >= 0 ? textColor[textColorIndex] : textColor

      setColors({
        bgColor: bgColorString as BgColor,
        textColor: textColorString as TextColor,
      })
    }
  }, [color])

  return colors
}
