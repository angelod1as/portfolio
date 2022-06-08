import { SerializeOptions } from 'next-mdx-remote/dist/types'
import { serialize as mdxSerialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
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

type Serialize = {
  content: string
  options?: SerializeOptions
}

export const serialize = async ({
  content,
  options,
}: Serialize): Promise<MDXRemoteSerializeResult> => {
  const mergedOptions: SerializeOptions = {
    mdxOptions: {
      rehypePlugins: [
        rehypeHighlight,
        rehypeSlug,
        // autoLinkHeadings,
      ],
    },
    ...(options ?? {}),
  }

  return await mdxSerialize(content, mergedOptions)
}
