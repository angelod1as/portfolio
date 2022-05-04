import { serialize } from './serialize'

type CompileMDXProps = {
  content: string
  data: {
    [key: string]: unknown
  }
  slug: string
}

export type MDXReturn<T> = {
  metadata?: T
  slug: string
  compiledSource: string
}

export const compileMDX = async <T>({
  content,
  data,
  slug,
}: CompileMDXProps) => {
  const { compiledSource } = await serialize(content)

  const result: MDXReturn<T> = {
    metadata: data as unknown as T,
    slug,
    compiledSource,
  }

  return result
}
