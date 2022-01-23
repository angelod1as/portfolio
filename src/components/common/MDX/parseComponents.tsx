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
  const text = textColor ?? ''
  const bg = bgColor ?? ''
  return {
    b: (props: JSX.IntrinsicElements['b']) => (
      <b {...props} className={`${text}`} />
    ),
    strong: (props: JSX.IntrinsicElements['strong']) => (
      <strong {...props} className={` ${text}`} />
    ),
    a: (props: JSX.IntrinsicElements['a']) => (
      <Link {...props} className={`underline ${text}`} />
    ),
    blockquote: (props: JSX.IntrinsicElements['blockquote']) => (
      <div>
        <blockquote {...props}>
          {props.children}
          <div
            className={`${styles.blockquoteBlock} ${bg}
          `}
          />
        </blockquote>
      </div>
    ),
    ...components,
  }
}
