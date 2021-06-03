import { useTranslation } from '@i18n/i18n'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TagWrapper } from './styles'

export type TagProps = {
  children: string
}

export default function Tag({ children }: TagProps) {
  const { locale } = useRouter()
  const t = useTranslation(locale)
  return (
    <Link href={`/${children}`}>
      <TagWrapper>{t(children)}</TagWrapper>
    </Link>
  )
}
