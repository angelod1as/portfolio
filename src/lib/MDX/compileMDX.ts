import { Metadata } from '#types/types'
import { serialize } from './serialize'

type CompileMDXProps = {
  content: string
  data: {
    [key: string]: unknown
  }
  slug: string
  directory: string
}

export type MDXReturn = {
  metadata: Metadata
  slug: string
  compiledSource: string
  directory: string
}

export const compileMDX = async ({
  content,
  data,
  slug,
  directory,
}: CompileMDXProps) => {
  const metadata = data as Metadata
  const { compiledSource } = await serialize({
    content,
    metadata,
    directory,
  })

  const result: MDXReturn = {
    metadata,
    directory,
    slug,
    compiledSource,
  }

  return result
}
