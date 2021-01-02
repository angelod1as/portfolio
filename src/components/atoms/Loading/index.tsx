import { useTranslation } from '@i18n/i18n'
import { useRouter } from 'next/router'
import { Wrapper, Square, Word, BG } from './styles'

export default function Loading() {
  const { locale } = useRouter()
  const t = useTranslation(locale)

  return (
    <Wrapper>
      <Word>{t('loading')}</Word>
      <Square>
        <BG />
      </Square>
    </Wrapper>
  )
}
