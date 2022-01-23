import { MDXProps } from '#types/types'
import { BgColor, TextColor } from 'src/helpers/colors'
import { Link } from '../Links'
import styles from './MDX.module.sass'

type Props = {
  bgColor?: BgColor
  textColor?: TextColor
  components?: MDXProps['components']
}

export const parseComponents = ({
  textColor,
  bgColor,
  components = {},
}: Props) => {
  return {
    b: (props: JSX.IntrinsicElements['b']) => (
      <b {...props} className={`${textColor ?? ''}`} />
    ),
    strong: (props: JSX.IntrinsicElements['strong']) => (
      <strong {...props} className={`${textColor ?? ''}`} />
    ),
    a: (props: JSX.IntrinsicElements['a']) => <Link {...props} />,
    blockquote: (props: JSX.IntrinsicElements['blockquote']) => (
      <div>
        <blockquote {...props}>
          {props.children}
          <div
            className={`${styles.blockquoteBlock} ${bgColor ?? ''}
          `}
          />
        </blockquote>
      </div>
    ),
    ...components,
  }
}
