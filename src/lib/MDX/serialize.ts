import { SerializeOptions } from 'next-mdx-remote/dist/types'
import { serialize as mdxSerialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import { handleMDXImages } from './handleMDXImages'

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
  directory?: string,
  options?: SerializeOptions
): Promise<MDXRemoteSerializeResult> {
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

  const newContent = directory ? handleMDXImages(directory, content) : content

  return await mdxSerialize(newContent, mergedOptions)
}
