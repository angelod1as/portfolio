import NextHead from 'next/head'

interface HeadProps {
  title?: string
  description?: string
}

export default function NewHead({ title, description }: HeadProps) {
  return (
    <NextHead>
      {title && (
        <>
          <title key="title">{title} - I'm Angelo and I do stuff</title>
          <meta
            name="title"
            key="meta-title"
            content={`${title} - I'm Angelo and I do stuff`}
          />
          <meta
            property="og:title"
            key="og:title"
            content={`${title} - I'm Angelo and I do stuff`}
          />
          <meta
            property="twitter:title"
            key="tw:title"
            content={`${title} - I'm Angelo and I do stuff`}
          />
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
