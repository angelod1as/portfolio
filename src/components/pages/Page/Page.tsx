import { MDX } from '#components/common/MDX'
import { NewHead } from '#components/common/NewHead'
import { PageProps } from '#pages/[slug]'
import { FCC } from '#types/types'
import { removeSymbolsFromString } from 'src/helpers/removeSymbolsFromString'

export const Page: FCC<PageProps> = ({ content }) => {
  const { compiledSource, metadata } = content
  return (
    <>
      {metadata?.title && (
        <NewHead
          title={removeSymbolsFromString(metadata.title)}
          description={
            metadata.description
              ? removeSymbolsFromString(metadata.description)
              : ''
          }
          image={metadata.socialImagePath ?? undefined}
        />
      )}
      <MDX mdx={{ compiledSource }} metadata={metadata} type="pages" />
    </>
  )
}
