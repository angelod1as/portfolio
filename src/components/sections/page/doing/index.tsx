import { Content, Grid, Wrapper } from './styles'
import { useRouter } from 'next/router'
import { useTranslation } from '@i18n/i18n'

import Header from '@components/atoms/Header'
import { NotionProps } from '@functions/fetchNotion'

type DoingProps = {
  items: NotionProps
}

export default function DoingPage({ items }: DoingProps) {
  const { locale } = useRouter()
  const t = useTranslation(locale)

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
      <Grid>
        <Content>CONTENT</Content>
      </Grid>
    </Wrapper>
  )
}
