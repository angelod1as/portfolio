import { MDXProps } from '#types/types'
import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { VerbObject } from 'src/helpers/verbs'
import styles from './MDX.module.sass'
import { parseComponents } from './parseComponents'

type Props = {
  mdx: MDXProps
  category: VerbObject
}

export const MDX = ({ mdx, category }: Props) => {
  const { components, ...rest } = mdx

  const parsedComponents = parseComponents({ category, components })

  return (
    <div className={styles.container}>
      <MDXRemote {...rest} components={parsedComponents} />
    </div>
  )
}
