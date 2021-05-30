import { ReactNode } from 'react'
import { TagWrapper } from './styles'

export type TagProps = {
  children: ReactNode
}

export default function Tag({ children }: TagProps) {
  return <TagWrapper>{children}</TagWrapper>
}
