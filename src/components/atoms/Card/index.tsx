import {
  CardWrapper,
  Description,
  ImageWrapper,
  Title,
  Content,
  LinkIcon,
  TagWrapper,
  ExternalLink,
} from './styles'
import { NotionProps } from '@functions/fetchNotion/'
import { useTranslation } from '@i18n/i18n'
import { useRouter } from 'next/router'
import { VscFileSymlinkFile } from 'react-icons/vsc'
import Tag from '../Tag'
import Link from 'next/link'

type NotionWoDates = Omit<
  NotionProps,
  'createdTime' | 'lastEditedTime' | 'status'
>

export interface ItemProps extends NotionWoDates {
  link?: string
}

export type CardProps = {
  item: ItemProps
}

export default function Card({ item }: CardProps) {
  const { locale } = useRouter()
  const t = useTranslation(locale)

  const { tags, link, image, externalLink } = item
  const { title, note } = item[locale]

  const CardComponent = (
    <CardWrapper link={link || externalLink}>
      {(link || externalLink) && (
        <LinkIcon>
          <VscFileSymlinkFile size={32} />
        </LinkIcon>
      )}
      <ImageWrapper>
        {image && <img src={image} alt={`${t('Thumbnail of')} ${title}`} />}
      </ImageWrapper>
      <Content>
        {title && <Title>{title}</Title>}
        {note && <Description>{note}</Description>}
        <TagWrapper>
          {tags && tags.map(tag => <Tag key={`${title}-${tag}`}>{tag}</Tag>)}
        </TagWrapper>
      </Content>
    </CardWrapper>
  )

  if (externalLink) {
    return (
      <ExternalLink href={externalLink} target="_blank" rel="noreferrer">
        {CardComponent}
      </ExternalLink>
    )
  }
  if (link) {
    return <Link href={link}>{CardComponent}</Link>
  }

  return CardComponent
}
