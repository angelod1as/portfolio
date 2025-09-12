import { LinkProps } from '#components/common/Links'
import { FCC } from '#types/types'
import { ReactNode } from 'react'

export * from './Am'
export * from './Colophon'
export * from './Generalist'
export * from './Opening'
export * from './Recommendations'
export * from './Want'
export * from './Was'

export type SectionProps = {
  children?: ReactNode
  Strong?: FCC
  ColorLink?: FCC<LinkProps>
}
