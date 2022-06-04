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
  const { compiledSource } = await serialize(content, directory)

  const result: MDXReturn<T> = {
    metadata: data as unknown as T,
    directory,
    slug,
    compiledSource,
  }

  return result
}
