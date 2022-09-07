import { MDXRemote } from 'next-mdx-remote'
import { RandomColors } from 'src/helpers/colors'

export const generateTitle = (compiledTitle: string, colors: RandomColors) => {
  const text = colors.textColor ?? ''

  const titleComponents = {
    p: (props: JSX.IntrinsicElements['p']) => (
      <h2 {...props}>{props.children}</h2>
    ),
    strong: (props: JSX.IntrinsicElements['strong']) => (
      <strong {...props} className={`${text}`} />
    ),
  }

  return (
    <MDXRemote compiledSource={compiledTitle} components={titleComponents} />
  )
}
