import { Content, Grid, Wrapper } from './styles'
import { Document } from '@contentful/rich-text-types'
import { useRouter } from 'next/router'
import { useTranslation } from '@i18n/i18n'

import Header from '@components/atoms/Header'

export interface ContentFieldsProps {
  title: string
  description: string
  content: Document
  slug: string
  date: string
  excerpt?: string
  live?: string
  repository?: string
  summary?: Document
}

interface TextProps {
  type: string
  content: {
    fields: ContentFieldsProps
  }
}

export default function DoingPage() {
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
