import { MDXProps } from '#types/types'
import { VerbObject } from 'src/helpers/verbs'
import { Link } from '../Links'
import styles from './MDX.module.sass'

type Props = {
  category: VerbObject
  components?: MDXProps['components']
}

export const parseComponents = ({ category, components = {} }: Props) => {
  return {
    a: (props: JSX.IntrinsicElements['a']) => <Link {...props} />,
    blockquote: (props: JSX.IntrinsicElements['blockquote']) => (
      <div>
        <blockquote {...props}>
          {props.children}
          <div
            className={`${styles.blockquoteBlock} ${category.bg}
          `}
          />
        </blockquote>
      </div>
    ),
    ...components,
  }
}
