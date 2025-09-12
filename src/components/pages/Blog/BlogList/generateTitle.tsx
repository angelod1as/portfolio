import { MDXRemote } from 'next-mdx-remote'

export const generateTitle = (compiledTitle: string) => {
  const titleComponents = {
    p: (props: JSX.IntrinsicElements['p']) => (
      <h2 {...props}>{props.children}</h2>
    ),
    strong: (props: JSX.IntrinsicElements['strong']) => (
      <strong {...props} className="text-highlight" />
    ),
  }

  return (
    <MDXRemote compiledSource={compiledTitle} components={titleComponents} />
  )
}
