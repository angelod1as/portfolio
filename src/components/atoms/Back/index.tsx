import { useTranslation } from '@i18n/i18n'
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
  const t = useTranslation(router.locale)

  return (
    <StyledBack onClick={() => router.back()} {...{ inverted }}>
      {t('back')}
    </StyledBack>
  )
}

export default Back
