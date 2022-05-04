import { MDXProps } from '#types/types'
import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { BgColor, TextColor } from 'src/helpers/colors'
import { globalComponents } from './globalComponents'
import styles from './MDX.module.sass'
import { parseComponents } from './parseComponents'

type Props = {
  mdx: MDXProps
  bgColor?: BgColor
  textColor?: TextColor
  blogPost?: boolean
}

export const MDX = ({ mdx, bgColor, textColor, blogPost }: Props) => {
  const { components, ...rest } = mdx

  const mergedComponents = {
    ...components,
    ...globalComponents({ bgColor }),
  }

  const parsedComponents = parseComponents({
    components: mergedComponents,
    bgColor,
    textColor,
  })

  // TODO: `pre` and `code` are not wrapping.

  return (
    <div className={`${styles.container} ${blogPost ? styles.blogPost : ''}`}>
      <MDXRemote {...rest} components={parsedComponents} />
    </div>
  )
}
