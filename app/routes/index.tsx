import Generalist from '../components/Home/Generalist.mdx'
import Title from '../components/Home/Title.mdx'
import Blog from '../components/Home/Blog.mdx'
import Want from '../components/Home/Want.mdx'
import Am from '../components/Home/Am.mdx'
import Was from '../components/Home/Was.mdx'
import { components } from '~/components/MDX/components'

export default function Index() {
  return (
    <>
      <Title components={components} />
      <Generalist components={components} />
      <Want components={components} />
      <Am components={components} />
      <Was components={components} />
      <Blog components={components} />
    </>
  )
}
