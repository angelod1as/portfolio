import { TagWrapper } from './styles'

export type TagProps = {
  tag: string
}

export default function Tag({ tag }: TagProps) {
  return <TagWrapper>{tag}</TagWrapper>
}
