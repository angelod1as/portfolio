import Button from '../Button'
import Back from '../Back'
import {
  Container,
  BackWrapper,
  Title,
  ExcerptWrapper,
  ExcerptTitle,
  ExcerptSubtitle,
  ExcerptText,
} from './styles'
import { useRouter } from 'next/router'
import { useTranslation } from '@i18n/i18n'

export interface HeaderProps {
  // Title
  title: string
  // Has "I'm angelo and I do..."
  hasIDo?: boolean
  // Excerpt
  excerpt?: string
  // Slug to build excerpt link
  slug?: string
  // Slim header
  slim?: boolean
  // Type of content. If undefined, no excerpt
  type: string | undefined
}

/**
 * Page header with optional excerpt
 */
export const Header = ({
  hasIDo = true,
  excerpt,
  title,
  slim,
  slug,
  type,
}: HeaderProps) => {
  const { locale } = useRouter()
  const t = useTranslation(locale)

  return (
    <Container {...{ slim }}>
      <BackWrapper {...{ slim }}>
        <Back inverted />
      </BackWrapper>
      <Title {...{ slim }}>
        {hasIDo && !slim && type && t("I'm angelo and I do ")}
        <span>{type ? title.toLowerCase() : title}</span>
      </Title>
      {type && excerpt && !slim ? (
        <ExcerptWrapper>
          <ExcerptTitle>{t('Time is short')}</ExcerptTitle>
          <ExcerptSubtitle>{t('Read this first')}</ExcerptSubtitle>
          <ExcerptText>{excerpt}</ExcerptText>
          <Button to={`${slug}/about`} inverted>
            {t('click to continue reading')}
          </Button>
        </ExcerptWrapper>
      ) : (
        ''
      )}
    </Container>
  )
}

export default Header
