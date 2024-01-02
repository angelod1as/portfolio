import { CTA } from '#components/common/CTA'
import { MDX } from '#components/common/MDX'
import { NewHead } from '#components/common/NewHead'
import { BlogPostProps } from '#pages/blog/[slug]'
import { FCC } from '#types/types'
import { removeSymbolsFromString } from 'src/helpers/removeSymbolsFromString'

export const Project: FCC<BlogPostProps> = ({ content }) => {
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
      <MDX mdx={{ compiledSource }} metadata={metadata} type="projects" />
      <CTA inner href="/projects" content="View all projects" />
    </>
  )
}
