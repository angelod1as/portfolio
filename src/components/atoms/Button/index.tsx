import {
  ButtonWrapper,
  ExternalLink,
  ButtonStyle,
  ButtonBg,
  Icon,
  GithubIcon,
} from './styles'
import Link from 'next/link'

export interface ButtonProps {
  // Content
  children: string
  // Optional click hander
  onClick?: () => void
  // Optional icon
  icon?: string
  // Borderless?
  borderless?: boolean
  // Light font color?
  inverted?: boolean
  // URL direction
  to?: string
  // External Href
  href?: string
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  children,
  icon,
  borderless,
  inverted,
  to,
  href,
  ...props
}: ButtonProps) => {
  const setIcon = () => {
    switch (icon) {
      case 'github':
        return (
          <GithubIcon inverted={inverted} borderless={borderless} size={20} />
        )
      default:
        return ''
    }
  }

  const rendered = () => {
    return (
      <ButtonWrapper data-testid={to ? 'link' : 'href'}>
        <ButtonStyle {...{ borderless, inverted }} type="button" {...props}>
          {icon && icon !== 'none' ? <Icon>{setIcon()}</Icon> : ''}
          <span>{children}</span>
        </ButtonStyle>
        <ButtonBg {...{ borderless, inverted }} />
      </ButtonWrapper>
    )
  }

  if (to) {
    return <Link href={to}>{rendered()}</Link>
  } else if (href) {
    return (
      <ExternalLink href={href} target="_blank" rel="noreferrer">
        {rendered()}
      </ExternalLink>
    )
  }
  return rendered()
}

export default Button
