import { NotionProps } from '@functions/fetchNotion'
import Card from '../Card'
import { CardWrapper, Title, Wrapper } from './styles'

type NotionWoDates = Omit<
  NotionProps,
  'createdTime' | 'lastEditedTime' | 'status'
>

export type CardSectionProps = {
  title: string
  items: Array<NotionWoDates>
}

export default function CardSection({ title, items }: CardSectionProps) {
  if (items?.length <= 0) {
    return null
  }
  return (
    <Wrapper>
      <Title>{title}</Title>

      <CardWrapper>
        {items.map((item, i) => (
          <Card key={title + i} item={item} />
        ))}
      </CardWrapper>
    </Wrapper>
  )
}
