import { bgColors, textColors } from './colors'

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
  color: string
  bg: string
  href: string
}

export const verbs: {
  [k in Verb]: VerbObject
} = {
  coding: {
    title: 'coding',
    href: 'coding',
    color: textColors[0],
    bg: bgColors[0],
  },
  design: {
    title: 'design',
    href: 'design',
    color: textColors[1],
    bg: bgColors[1],
  },
  management: {
    title: 'management',
    href: 'management',
    color: textColors[2],
    bg: bgColors[2],
  },
  talking: {
    title: 'talking',
    href: 'talking',
    color: textColors[3],
    bg: bgColors[3],
  },
  audio: {
    title: 'audio',
    href: 'audio',
    color: textColors[4],
    bg: bgColors[4],
  },
  writing: {
    title: 'writing',
    href: 'writing',
    color: textColors[5],
    bg: bgColors[5],
  },
  tarot: {
    title: 'tarot reading',
    href: 'tarot',
    color: textColors[6],
    bg: bgColors[6],
  },
}

export type TileProps = Omit<VerbObject, 'color'>

export const tiles: TileProps[] = Object.keys(verbs).map(verb => {
  const word = verb as Verb
  return {
    title: verbs[word].title,
    bg: verbs[word].bg,
    href: verbs[word].href,
    color: verbs[word].color,
  }
})
