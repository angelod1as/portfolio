import { generateTOC } from 'src/helpers/generateTOC'
import { serialize } from './serialize'

type CompileMDXProps = {
  content: string
  data: {
    [key: string]: unknown
  }
  slug: string
}

export const compileMDX = async <T>({
  content,
  data,
  slug,
}: CompileMDXProps) => {
  const { compiledSource } = await serialize(content)

  const toc = generateTOC(content)

  return {
    data: {
      ...data,
      slug,
      toc,
    },
    compiledSource,
  } as unknown as T
}
