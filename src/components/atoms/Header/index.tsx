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
  return (
    <Container {...{ slim }}>
      <BackWrapper {...{ slim }}>
        <Back inverted />
      </BackWrapper>
      <Title {...{ slim }}>
        {hasIDo && !slim && type && "I'm angelo and I do "}
        <span>{type ? title.toLowerCase() : title}</span>
      </Title>
      {type && excerpt && !slim ? (
        <ExcerptWrapper>
          <ExcerptTitle>Time is short</ExcerptTitle>
          <ExcerptSubtitle>Read this first</ExcerptSubtitle>
          <ExcerptText>{excerpt}</ExcerptText>
          <Button to={`${slug}/about`} inverted>
            click to continue reading
          </Button>
        </ExcerptWrapper>
      ) : (
        ''
      )}
    </Container>
  )
}

export default Header
