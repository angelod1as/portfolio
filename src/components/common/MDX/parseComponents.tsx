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
      <strong {...props} className={`${text}`} />
    ),
    a: (props: JSX.IntrinsicElements['a']) => (
      <Link className={textColor} {...props} href={props.href ?? ''} />
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
    h1: (props: JSX.IntrinsicElements['h1']) => (
      <h1 {...props}>{props.children}</h1>
    ),
    h2: (props: JSX.IntrinsicElements['h2']) => (
      <h2 className={textColor} {...props}>
        {props.children}
      </h2>
    ),
    h3: (props: JSX.IntrinsicElements['h3']) => (
      <h3 className={textColor} {...props}>
        {props.children}
      </h3>
    ),
    h4: (props: JSX.IntrinsicElements['h4']) => (
      <h4 className={textColor} {...props}>
        {props.children}
      </h4>
    ),
    h5: (props: JSX.IntrinsicElements['h5']) => (
      <h5 className={textColor} {...props}>
        {props.children}
      </h5>
    ),
    h6: (props: JSX.IntrinsicElements['h6']) => (
      <h6 className={textColor} {...props}>
        {props.children}
      </h6>
    ),
    ...components,
  }
}
