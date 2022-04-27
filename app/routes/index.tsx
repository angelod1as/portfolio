import Generalist from '../components/Home/Generalist.mdx'
import Title from '../components/Home/Title.mdx'
import Blog from '../components/Home/Blog.mdx'
import Want from '../components/Home/Want.mdx'
import Am from '../components/Home/Am.mdx'
import Was from '../components/Home/Was.mdx'
import { components } from '~/components/MDX/components'
import { MDXComponent } from '~/components/MDX/MDXComponent'

export default function Index() {
  return (
    <>
      <MDXComponent MDX={Title} />
      <MDXComponent MDX={Generalist} />
      <MDXComponent MDX={Want} />
      <MDXComponent MDX={Am} />
      <MDXComponent MDX={Was} />
      <MDXComponent MDX={Blog} />
    </>
  )
}
