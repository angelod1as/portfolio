export type RandomColors = {
  textColor: TextColor
  bgColor: BgColor
  borderColor: BorderColor
  beforeTextColor: BeforeTextColor
}

type Prefix = 'bg-' | 'text-' | 'border-' | 'before:text-'

const generateColors = <T>(color: string, group: T[], prefix: Prefix) => {
  const colorDefault = `${prefix}${color}` as unknown as T
  const colorIndex = group.indexOf(colorDefault)
  const colorString = colorIndex >= 0 ? group[colorIndex] : group[0]

  return colorString
}

export const randomColors = (color?: string | undefined): RandomColors => {
  const max = textColor.length
  const index = Math.floor(Math.random() * max)

  if (!color) {
    return {
      textColor: textColor[index],
      bgColor: bgColor[index],
      borderColor: borderColor[index],
      beforeTextColor: beforeTextColor[index],
    }
  }

  return {
    bgColor: generateColors<BgColor>(color, bgColor, 'bg-'),
    textColor: generateColors<TextColor>(color, textColor, 'text-'),
    borderColor: generateColors<BorderColor>(color, borderColor, 'border-'),
    beforeTextColor: generateColors<BeforeTextColor>(
      color,
      beforeTextColor,
      'before:text-'
    ),
  }
}

/* COLOR TYPES */

export type Colors = 'purple' | 'yellow' | 'pink' | 'blue' | 'green' | 'red'

export type BgColor = `bg-${Colors}`

export const bgColor: BgColor[] = [
  'bg-yellow',
  'bg-purple',
  'bg-pink',
  'bg-blue',
  'bg-green',
  'bg-red',
]

export type TextColor = `text-${Colors}`

export const textColor: TextColor[] = [
  'text-yellow',
  'text-purple',
  'text-pink',
  'text-blue',
  'text-green',
  'text-red',
]

export type BorderColor = `border-${Colors}`

export const borderColor: BorderColor[] = [
  'border-yellow',
  'border-purple',
  'border-pink',
  'border-blue',
  'border-green',
  'border-red',
]

export type BeforeTextColor = `before:${TextColor}`

export const beforeTextColor: BeforeTextColor[] = [
  'before:text-yellow',
  'before:text-purple',
  'before:text-pink',
  'before:text-blue',
  'before:text-green',
  'before:text-red',
]
