import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { Link } from '../Links'
import styles from './MDX.module.sass'

export const MDX: typeof MDXRemote = props => {
  const { components, ...rest } = props

  const propsComponents = components ?? {}

  const parsedComponents = {
    a: (props: JSX.IntrinsicElements['a']) => <Link {...props} />,
    ...propsComponents,
  }

  return (
    <div className={styles.container}>
      <MDXRemote {...rest} components={parsedComponents} />
    </div>
  )
}
