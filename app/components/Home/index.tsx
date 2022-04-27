import Generalist from './Generalist.mdx'
import Title from './Title.mdx'
import Blog from './Blog.mdx'
import Want from './Want.mdx'
import Am from './Am.mdx'
import Was from './Was.mdx'
import { MDXComponent } from '~/components/MDX/MDXComponent'

export const Home = () => {
  return (
    <div className="flex flex-col gap-[160px]">
      <MDXComponent MDX={Title} />
      <MDXComponent MDX={Generalist} />
      <MDXComponent MDX={Want} />
      <MDXComponent MDX={Am} />
      <MDXComponent MDX={Was} />
      <MDXComponent MDX={Blog} />
    </div>
  )
}
