const color = {
  color: '#333333',
  white: '#FFFFFF',
  black: '#333333',
  gray: '#CCCCCC',
  darkgray: '#A9A9A9',
}

const font = {
  display: 'Montserrat Alternates',
  text: 'Montserrat',
}

const tileColors = [
  'black', // preto
  '#9b11c1', // roxo
  '#F2B705', // amarelão
  '#DF2935', // rose madder

  '#3772FF', // blue crayola
  '#D23600', // laranja
  '#298e14', // verdão
  '#3a0e9b', // azul quase roxo

  '#d81e5b', // rosa brilhante
  '#5F4BB6', // plum purple
  '#525252', // davy's gray
  '#1BBC9B', // teal

  '#9BC53D', // android green
  '#190E4F', // space cadet
  '#AF4319', // chinese red
  '#55917F', // wintergreen dream
]

const size = {
  large: `(max-width: 1400px)`,
  medium: `(max-width: 1100px)`,
  small: `(max-width: 600px)`,
}

export interface ThemeProps {
  size: { [key in keyof typeof size]: string }
  color: { [key in keyof typeof color]: string }
  font: { [key in keyof typeof font]: string }
  tileColors: string[]
}

export const theme: ThemeProps = {
  size,
  color,
  font,
  tileColors,
}

export default theme
