import { SerializeOptions } from 'next-mdx-remote/dist/types'
import { serialize as mdxSerialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

type MDXRemoteSerializeResult<TScope = Record<string, unknown>> = {
  compiledSource: string
  scope?: TScope
}

// This can work with links in headings, but current styling is not great.
const _autoLinkHeadings = () =>
  rehypeAutolinkHeadings({
    behavior: 'prepend',
    content: {
      type: 'text',
      value: '#',
    },
    test: ['h2', 'h3', 'h4', 'h5', 'h6'],
  })

export async function serialize(
  content: string,
  options?: SerializeOptions
): Promise<MDXRemoteSerializeResult> {
  const mergedOptions = {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        // autoLinkHeadings,
      ],
    },
    ...(options ?? {}),
  }

  return await mdxSerialize(content, mergedOptions)
}
