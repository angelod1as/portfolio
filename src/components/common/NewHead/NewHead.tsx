import NextHead from 'next/head'
type HeadProps = {
  title?: string
  description?: string
}

export function NewHead({ title, description }: HeadProps) {
  const metaTitle = title
    ? `${title} - I'm Angelo and I do stuff`
    : "I'm Angelo and I do stuff"

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
