import { bgColors, textColors } from './colors'

export type Verb =
  | 'coding'
  | 'design'
  | 'mgmt'
  | 'talking'
  | 'audio'
  | 'writing'
  | 'tarot'

export const verbs: {
  [k in Verb]: {
    title: string
    color: string
    bg: string
  }
} = {
  coding: {
    title: 'coding',
    color: textColors[0],
    bg: bgColors[0],
  },
  design: {
    title: 'design',
    color: textColors[1],
    bg: bgColors[1],
  },
  mgmt: {
    title: 'management',
    color: textColors[2],
    bg: bgColors[2],
  },
  talking: {
    title: 'talking',
    color: textColors[3],
    bg: bgColors[3],
  },
  audio: {
    title: 'audio',
    color: textColors[4],
    bg: bgColors[4],
  },
  writing: {
    title: 'writing',
    color: textColors[5],
    bg: bgColors[5],
  },
  tarot: {
    title: 'tarot reading',
    color: textColors[6],
    bg: bgColors[6],
  },
}

export type TileProps = {
  bg: string
  title: string
}

export const tiles: TileProps[] = Object.keys(verbs).map(verb => {
  const word = verb as Verb
  return {
    title: verbs[word].title,
    bg: verbs[word].bg,
  }
})
