import NextHead from 'next/head'
type HeadProps = {
  title?: string
  description?: string
  image?: string
}

export function NewHead({ title, description, image }: HeadProps) {
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

      {image && (
        <>
          <meta
            property="og:image"
            key="og:image"
            content={'https://' + image}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@oicronofobico" />
          <meta
            property="twitter:image"
            key="twitter:image"
            content={'https://' + image}
          />
        </>
      )}
    </NextHead>
  )
}
