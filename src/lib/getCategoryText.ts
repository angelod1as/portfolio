import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { VerbObject } from 'src/helpers/verbs'

export const getCategoryText = async (category: VerbObject) => {
  const contentDir = join(process.cwd(), 'content', 'tiles')

  const filePath = join(contentDir, `${category.href}.mdx`)
  const fileContent = readFileSync(filePath, 'utf-8')

  const { data, content } = matter(fileContent)

  const { compiledSource, scope } = await serialize(content, {
    scope: category,
  })

  const typedScope = scope as { category: VerbObject }

  return {
    data,
    compiledSource,
    scope: typedScope,
  }
}
