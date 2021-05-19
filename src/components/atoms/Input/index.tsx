import {
  Container,
  InputWrapper,
  InputLabel,
  Icon,
  StyledInput,
  MailIcon,
  AccountIcon,
} from './styles'

export interface InputProps {
  // Content
  label: string
  // Optional icon
  icon?: string
  // Light font color?
  inverted: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({ label, icon, inverted, ...props }: InputProps) => {
  const setIcon = () => {
    if (icon === 'email') {
      return <MailIcon size={20} />
    }
    return <AccountIcon size={20} />
  }

  const itemProps = { ...{ inverted, icon } }

  return (
    <Container>
      <InputLabel {...itemProps}>{label}</InputLabel>
      <InputWrapper {...itemProps}>
        {icon && icon !== 'none' ? (
          <Icon data-testid="icon">{setIcon()}</Icon>
        ) : (
          ''
        )}
        <StyledInput {...props} {...itemProps} type="text" />
      </InputWrapper>
    </Container>
  )
}

export default Input
