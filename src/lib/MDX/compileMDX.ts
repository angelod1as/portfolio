import { serialize } from './serialize'

type CompileMDXProps = {
  content: string
  data: {
    [key: string]: unknown
  }
  slug: string
  directory: string
}

export type MDXReturn<T> = {
  metadata?: T
  slug: string
  compiledSource: string
  directory: string
}

export const compileMDX = async <T>({
  content,
  data,
  slug,
  directory,
}: CompileMDXProps) => {
  const metadata = data as unknown as T
  const { compiledSource } = await serialize<T>({
    content,
    metadata,
    directory,
  })

  const result: MDXReturn<T> = {
    metadata,
    directory,
    slug,
    compiledSource,
  }

  return result
}
