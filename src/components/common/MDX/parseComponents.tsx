import { MDXProps } from '#types/types'
import { RandomColors } from 'src/helpers/colors'
import { Link } from '../Links'
import styles from './MDX.module.sass'

type Props = {
  components?: MDXProps['components']
  colors: RandomColors
}

export const parseComponents = ({ components = {}, colors }: Props) => {
  const text = colors.textColor ?? ''
  const bg = colors.bgColor ?? ''

  return {
    b: (props: JSX.IntrinsicElements['b']) => (
      <b {...props} className={`${text}`} />
    ),
    strong: (props: JSX.IntrinsicElements['strong']) => (
      <strong {...props} className={`${text}`} />
    ),
    a: (props: JSX.IntrinsicElements['a']) => (
      <Link className={text} {...props} href={props.href ?? ''} />
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
      <h2 className={text} {...props}>
        {props.children}
      </h2>
    ),
    h3: (props: JSX.IntrinsicElements['h3']) => (
      <h3 className={text} {...props}>
        {props.children}
      </h3>
    ),
    h4: (props: JSX.IntrinsicElements['h4']) => (
      <h4 className={text} {...props}>
        {props.children}
      </h4>
    ),
    h5: (props: JSX.IntrinsicElements['h5']) => (
      <h5 className={text} {...props}>
        {props.children}
      </h5>
    ),
    h6: (props: JSX.IntrinsicElements['h6']) => (
      <h6 className={text} {...props}>
        {props.children}
      </h6>
    ),
    ...components,
  }
}
