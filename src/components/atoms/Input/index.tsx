import {
  Container,
  InputWrapper,
  InputLabel,
  Icon,
  StyledInput,
} from './styles'
import { VscMail, VscAccount } from 'react-icons/vsc'
import theme from '@styles/theme'

export interface InputProps {
  // What background color to use
  backgroundColor: string
  // Content
  label: string
  // Optional icon
  icon: string
  // Light font color?
  inverted: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  label,
  icon,
  backgroundColor,
  inverted,
  ...props
}: InputProps) => {
  const iconColor = inverted ? theme.color.white : backgroundColor

  const setIcon = () => {
    switch (icon) {
      case 'email':
        return <VscMail size={20} color={iconColor} />
      case 'name':
        return <VscAccount size={20} color={iconColor} />
      default:
        return ''
    }
  }

  const itemProps = { ...{ backgroundColor, inverted, icon } }

  return (
    <Container>
      <InputLabel {...itemProps}>{label}</InputLabel>
      <InputWrapper {...itemProps}>
        {icon && icon !== 'none' ? <Icon>{setIcon()}</Icon> : ''}
        <StyledInput {...props} {...itemProps} type="text" />
      </InputWrapper>
    </Container>
  )
}
