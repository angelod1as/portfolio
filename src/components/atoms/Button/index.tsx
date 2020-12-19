import {
  ButtonWrapper,
  ExternalLink,
  ButtonStyle,
  ButtonBg,
  Icon,
} from './styles'
import { VscGithubInverted } from 'react-icons/vsc'
import theme from '@styles/theme'
import Link from 'next/link'

export interface ButtonProps {
  // What background color to use
  backgroundColor: string
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
  backgroundColor,
  borderless,
  inverted,
  to,
  href,
  ...props
}: ButtonProps) => {
  const iconColor = inverted ? theme.color.white : backgroundColor

  const setIcon = () => {
    switch (icon) {
      case 'github':
        return <VscGithubInverted size={20} color={iconColor} />
      default:
        return ''
    }
  }

  const rendered = () => {
    return (
      <ButtonWrapper>
        <ButtonStyle
          {...{ backgroundColor, borderless, inverted }}
          type="button"
          {...props}
        >
          {icon && icon !== 'none' ? <Icon>{setIcon()}</Icon> : ''}
          {children}
        </ButtonStyle>
        <ButtonBg {...{ backgroundColor, borderless, inverted }} />
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
  return <div />
}

export default Button
