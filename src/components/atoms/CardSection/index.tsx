import { NotionProps } from '@functions/fetchNotion'
import { useState } from 'react'
import Card from '../Card'
import { CardWrapper, Title, StyledAnimateHeight } from './styles'

type NotionWoDates = Omit<
  NotionProps,
  'createdTime' | 'lastEditedTime' | 'status'
>

export type CardSectionProps = {
  title: string
  items: Array<NotionWoDates>
}

export default function CardSection({ title, items }: CardSectionProps) {
  const [collapsed, setCollapsed] = useState(true)

  if (items?.length <= 0) {
    return null
  }

  const handleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <Title collapsed={collapsed} onClick={handleCollapse}>
        {title}
      </Title>
      <StyledAnimateHeight
        onClick={collapsed ? handleCollapse : null}
        height={collapsed ? 100 : 'auto'}
      >
        <CardWrapper>
          {items.map(({ title, tags, image, quickNote, link }, i) => (
            <Card
              key={title + i}
              {...{ title, tags, image, quickNote, link }}
            />
          ))}
        </CardWrapper>
      </StyledAnimateHeight>
    </>
  )
}
