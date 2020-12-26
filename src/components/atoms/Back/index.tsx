import { useRouter } from 'next/router'
import { StyledBack } from './styles'

export interface BackProps {
  // Dark background and light font?
  inverted?: boolean
}

/**
 * Back button
 */
export const Back = ({ inverted }: BackProps) => {
  const router = useRouter()
  return (
    <StyledBack onClick={() => router.back()} {...{ inverted }}>
      back
    </StyledBack>
  )
}

export default Back
