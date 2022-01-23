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
}

export const MDX = ({ mdx, bgColor, textColor }: Props) => {
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

  return (
    <div className={styles.container}>
      <MDXRemote {...rest} components={parsedComponents} />
    </div>
  )
}
