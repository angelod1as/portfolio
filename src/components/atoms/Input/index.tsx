import {
  Container,
  InputWrapper,
  InputLabel,
  Icon,
  StyledInput,
  MailIcon,
  AccountIcon,
} from './styles'
import { VscMail, VscAccount } from 'react-icons/vsc'
import theme from '@styles/theme'

export interface InputProps {
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
export const Input = ({ label, icon, inverted, ...props }: InputProps) => {
  const setIcon = () => {
    switch (icon) {
      case 'email':
        return <MailIcon size={20} />
      case 'name':
        return <AccountIcon size={20} />
      default:
        return ''
    }
  }

  const itemProps = { ...{ inverted, icon } }

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

export default Input
