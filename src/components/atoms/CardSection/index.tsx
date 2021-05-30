import { NotionProps } from '@functions/fetchNotion'
import { useRouter } from 'next/router'
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
    <div>
      <Title collapsed={collapsed} onClick={handleCollapse}>
        {title}
      </Title>
      <StyledAnimateHeight
        onClick={collapsed ? handleCollapse : null}
        height={collapsed ? 100 : 'auto'}
      >
        <CardWrapper>
          {items.map((item, i) => (
            <Card key={title + i} item={item} />
          ))}
        </CardWrapper>
      </StyledAnimateHeight>
    </div>
  )
}
