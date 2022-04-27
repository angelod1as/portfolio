import type { ComponentType, FC } from 'react'
import { components } from './components'

type MDXComponentProps = {
  components?: typeof components
  MDX: ComponentType<{ components?: typeof components }>
}

/* This component is a workaround
 * It needs this solution:
 * https://github.com/remix-run/remix/pull/2602
 */
export const MDXComponent: FC<MDXComponentProps> = ({ MDX }) => {
  return (
    <div>
      <MDX components={components} />
    </div>
  )
}
