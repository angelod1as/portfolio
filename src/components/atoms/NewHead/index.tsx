import { useTranslation } from '@i18n/i18n'
import NextHead from 'next/head'
import { useRouter } from 'next/router'

interface HeadProps {
  title?: string
  description?: string
}

export default function NewHead({ title, description }: HeadProps) {
  const { locale } = useRouter()
  const t = useTranslation(locale)

  const metaTitle = `${title} - ${t("I'm Angelo and I do stuff")}`

  return (
    <NextHead>
      {title && (
        <>
          <title key="title">{metaTitle}</title>
          <meta name="title" key="meta-title" content={metaTitle} />
          <meta property="og:title" key="og:title" content={metaTitle} />
          <meta property="twitter:title" key="tw:title" content={metaTitle} />
        </>
      )}

      {description && (
        <>
          <meta
            name="description"
            key="meta-description"
            content={description}
          />
          <meta
            property="og:description"
            key="og:description"
            content={description}
          />
          <meta
            property="twitter:description"
            key="tw:description"
            content={description}
          />
        </>
      )}
    </NextHead>
  )
}
