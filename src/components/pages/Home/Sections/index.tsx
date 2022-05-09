import { LinkProps } from '#components/common/Links'
import { ReactNode } from 'react'
import { TextColor } from 'src/helpers/colors'

export * from './Opening'
export * from './Generalist'
export * from './Want'
export * from './Am'
export * from './Was'
export * from './Colophon'

export type SectionProps = {
  color: TextColor
  children?: ReactNode
  Strong?: React.FC<{
    children: ReactNode
  }>
  ColorLink?: React.FC<LinkProps>
}
