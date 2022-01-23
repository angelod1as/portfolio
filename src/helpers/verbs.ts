import { BgColor, bgColor, TextColor, textColor } from './colors'

export type Verb =
  | 'coding'
  | 'design'
  | 'management'
  | 'talking'
  | 'audio'
  | 'writing'
  | 'tarot'

export type VerbObject = {
  title: string
  color: TextColor
  bg: BgColor
  href: Verb
}

export const verbs: {
  [k in Verb]: VerbObject
} = {
  coding: {
    title: 'coding',
    href: 'coding',
    color: textColor[0],
    bg: bgColor[0],
  },
  design: {
    title: 'design',
    href: 'design',
    color: textColor[1],
    bg: bgColor[1],
  },
  management: {
    title: 'management',
    href: 'management',
    color: textColor[2],
    bg: bgColor[2],
  },
  talking: {
    title: 'talking',
    href: 'talking',
    color: textColor[3],
    bg: bgColor[3],
  },
  audio: {
    title: 'audio',
    href: 'audio',
    color: textColor[4],
    bg: bgColor[4],
  },
  writing: {
    title: 'writing',
    href: 'writing',
    color: textColor[5],
    bg: bgColor[5],
  },
  tarot: {
    title: 'tarot reading',
    href: 'tarot',
    color: textColor[6],
    bg: bgColor[6],
  },
}

export type TileProps = VerbObject

export const tiles: TileProps[] = Object.keys(verbs).map(verb => {
  const word = verb as Verb
  return {
    title: verbs[word].title,
    bg: verbs[word].bg,
    href: verbs[word].href,
    color: verbs[word].color,
  }
})
