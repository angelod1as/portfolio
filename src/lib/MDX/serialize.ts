import { SerializeOptions } from 'next-mdx-remote/dist/types'
import { serialize as mdxSerialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

type MDXRemoteSerializeResult<TScope = Record<string, unknown>> = {
  compiledSource: string
  scope?: TScope
}

export async function serialize(
  content: string,
  options?: SerializeOptions
): Promise<MDXRemoteSerializeResult> {
  const mergedOptions = {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
    ...(options ?? {}),
  }

  return await mdxSerialize(content, mergedOptions)
}
