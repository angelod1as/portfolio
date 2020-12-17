import { StyledBack } from './styles'

export interface BackProps {
  // Dark background and light font?
  inverted?: boolean
}

/**
 * Back button
 */
export const Back = ({ inverted }: BackProps) => {
  return <StyledBack {...{ inverted }}>back</StyledBack>
}

export default Back
