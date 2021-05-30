import {
  CardWrapper,
  Description,
  ImageWrapper,
  Title,
  Content,
  LinkIcon,
  TagWrapper,
} from './styles'
import { NotionProps } from '@functions/fetchNotion'
import { useTranslation } from '@i18n/i18n'
import { useRouter } from 'next/router'
import { VscFileSymlinkFile } from 'react-icons/vsc'
import Tag from '../Tag'
import Link from 'next/link'

type NotionWoDates = Omit<
  NotionProps,
  'createdTime' | 'lastEditedTime' | 'status'
>

export interface CardProps extends NotionWoDates {
  link?: string
}

export default function Card({
  title,
  quickNote,
  tags,
  image,
  link,
}: CardProps) {
  const { locale } = useRouter()
  const t = useTranslation(locale)

  const CardComponent = (
    <CardWrapper link={link}>
      {link && (
        <LinkIcon>
          <VscFileSymlinkFile size={32} />
        </LinkIcon>
      )}
      <ImageWrapper>
        {image && <img src={image} alt={`${t('Thumbnail of')} ${title}`} />}
      </ImageWrapper>
      <Content>
        {title && <Title>{title}</Title>}
        {quickNote && <Description>{quickNote}</Description>}
        <TagWrapper>
          {tags && tags.map(tag => <Tag key={`${title}-${tag}`}>{tag}</Tag>)}
        </TagWrapper>
      </Content>
    </CardWrapper>
  )

  if (link) {
    return <Link href={link}>{CardComponent}</Link>
  }

  return CardComponent
}
