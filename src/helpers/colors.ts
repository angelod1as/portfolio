export type RandomColors = {
  textColor: TextColor
  bgColor: BgColor
  borderColor: BorderColor
}

export const randomColors = (color?: string | undefined): RandomColors => {
  const max = textColor.length
  const index = Math.floor(Math.random() * max)

  if (!color) {
    return {
      textColor: textColor[index],
      bgColor: bgColor[index],
      borderColor: borderColor[index],
    }
  }

  const bgDefault = `bg-${color}` as BgColor
  const bgColorIndex = bgColor.indexOf(bgDefault)
  const bgColorString = bgColorIndex >= 0 ? bgColor[bgColorIndex] : bgColor[0]

  const textDefault = `text-${color}` as TextColor
  const textColorIndex = textColor.indexOf(textDefault)
  const textColorString =
    textColorIndex >= 0 ? textColor[textColorIndex] : textColor[0]

  const borderDefault = `border-${color}` as BorderColor
  const borderColorIndex = borderColor.indexOf(borderDefault)
  const borderColorString =
    borderColorIndex >= 0 ? borderColor[borderColorIndex] : borderColor[0]

  return {
    bgColor: bgColorString,
    textColor: textColorString,
    borderColor: borderColorString,
  }
}

/* COLOR TYPES */

export type Colors = 'purple' | 'yellow' | 'pink' | 'blue' | 'green' | 'red'

export type BgColor = `bg-${Colors}`

export const bgColor: BgColor[] = [
  'bg-purple',
  'bg-yellow',
  'bg-pink',
  'bg-blue',
  'bg-green',
  'bg-red',
]

export type TextColor = `text-${Colors}`

export const textColor: TextColor[] = [
  'text-purple',
  'text-yellow',
  'text-pink',
  'text-blue',
  'text-green',
  'text-red',
]

export type BorderColor = `border-${Colors}`

export const borderColor: BorderColor[] = [
  'border-purple',
  'border-yellow',
  'border-pink',
  'border-blue',
  'border-green',
  'border-red',
]
