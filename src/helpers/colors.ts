export type BgColor =
  | 'bg-purple'
  | 'bg-yellow'
  | 'bg-pink'
  | 'bg-blue'
  | 'bg-green'
  | 'bg-red'

export const bgColor: BgColor[] = [
  'bg-purple',
  'bg-yellow',
  'bg-pink',
  'bg-blue',
  'bg-green',
  'bg-red',
]

export type TextColor =
  | 'text-purple'
  | 'text-yellow'
  | 'text-pink'
  | 'text-blue'
  | 'text-green'
  | 'text-red'

export const textColor: TextColor[] = [
  'text-purple',
  'text-yellow',
  'text-pink',
  'text-blue',
  'text-green',
  'text-red',
]

export type RandomColors = {
  textColor: TextColor
  bgColor: BgColor
}

export const randomColors = (color?: string | undefined): RandomColors => {
  const max = textColor.length
  const index = Math.floor(Math.random() * max)

  const bgDefault = color ? (`bg-${color}` as BgColor) : bgColor[index]
  const textDefault = color ? (`text-${color}` as TextColor) : textColor[index]

  if (!color) {
    return {
      textColor: textDefault,
      bgColor: bgDefault,
    }
  }

  const bgColorIndex = bgColor.indexOf(bgDefault)
  const textColorIndex = textColor.indexOf(textDefault)
  const bgColorString = bgColorIndex >= 0 ? bgColor[bgColorIndex] : bgColor
  const textColorString =
    textColorIndex >= 0 ? textColor[textColorIndex] : textColor

  return {
    bgColor: bgColorString as BgColor,
    textColor: textColorString as TextColor,
  }
}
