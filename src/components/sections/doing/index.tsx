import { Wrapper, SectionSeparator } from './styles'
import { useRouter } from 'next/router'
import { useTranslation } from '@i18n/i18n'

import Header from '@components/atoms/Header'
import { DoingProps } from '@pages/doing'
import CardSection from '@components/atoms/CardSection'

export default function DoingPage({ cards }: DoingProps) {
  const { locale } = useRouter()
  const t = useTranslation(locale)

  const statusDictionary = {
    todo: t('To do'),
    doing: t('Doing'),
    done: t('Done'),
    later: t('Later'),
    waiting: t('Waiting'),
    dropped: t('Dropped'),
  }

  const headerData = {
    title: t('Doing'),
    excerpt: '',
    slug: 'doing',
    type: 'custom',
    hasIDo: true,
    doing: true,
  }

  return (
    <Wrapper>
      <Header {...headerData} />
      <SectionSeparator>
        {Object.keys(cards).map(cardGroup => (
          <CardSection
            key={cardGroup}
            title={statusDictionary[cardGroup]}
            items={cards[cardGroup]}
          />
        ))}
      </SectionSeparator>
    </Wrapper>
  )
}
