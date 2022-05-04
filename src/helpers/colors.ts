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

export const randomColors = (): RandomColors => {
  const max = textColor.length
  const index = Math.floor(Math.random() * max)
  return {
    textColor: textColor[index],
    bgColor: bgColor[index],
  }
}
