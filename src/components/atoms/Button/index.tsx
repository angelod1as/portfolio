import { ButtonWrapper, ButtonStyle, ButtonBg, Icon } from './styles'
import { VscGithubInverted } from 'react-icons/vsc'
import theme from '@styles/theme'

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

export default Button
