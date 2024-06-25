import { LinkProps } from '#components/common/Links'
import { FCC } from '#types/types'
import { ReactNode } from 'react'
import { TextColor } from 'src/helpers/colors'

export * from './Opening'
export * from './Generalist'
export * from './Want'
export * from './Am'
export * from './Was'
export * from './Colophon'
export * from './Recommendations'

export type SectionProps = {
  color: TextColor
  children?: ReactNode
  Strong?: FCC
  ColorLink?: FCC<LinkProps>
}
