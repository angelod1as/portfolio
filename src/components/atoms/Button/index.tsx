import { ButtonWrapper, ButtonStyle, ButtonBg, Icon } from './styles'
import { VscGithubInverted } from 'react-icons/vsc'
import theme from '@styles/theme'

export interface ButtonProps {
  // What background color to use
  backgroundColor: string | 'fixed-black' | 'fixed-white'
  // Content
  label: string
  // Optional click hander
  onClick?: () => void
  // Optional icon
  icon: string
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, icon, backgroundColor, ...props }: ButtonProps) => {
  let iconColor = backgroundColor
  if (backgroundColor === 'fixed-black') {
    iconColor = theme.color.white
  } else if (backgroundColor === 'fixed-white') {
    iconColor = theme.color.black
  }

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
      <ButtonStyle backgroundColor={backgroundColor} type="button" {...props}>
        {icon ? <Icon>{setIcon()}</Icon> : ''}
        {label}
      </ButtonStyle>
      <ButtonBg backgroundColor={backgroundColor} />
    </ButtonWrapper>
  )
}
