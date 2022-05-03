import { MDX } from '#components/common/MDX'
import { NewHead } from '#components/common/NewHead'
import { PageProps } from '#pages/[slug]'
import React, { FC } from 'react'
import { BgColor, bgColor, TextColor, textColor } from 'src/helpers/colors'

export const Page: FC<Omit<PageProps, 'slug'>> = ({
  compiledSource,
  metadata,
}) => {
  let bgColorString = bgColor[1]
  let textColorString = textColor[1]

  if (metadata?.color) {
    const bgColorIndex = bgColor.indexOf(`bg-${metadata.color}` as BgColor)
    const textColorIndex = textColor.indexOf(
      `text-${metadata.color}` as TextColor
    )
    bgColorString = bgColorIndex >= 0 ? bgColor[bgColorIndex] : bgColor[1]
    textColorString =
      textColorIndex >= 0 ? textColor[textColorIndex] : textColor[1]
  }

  return (
    <>
      <NewHead title={metadata?.title} />
      <MDX
        mdx={{ compiledSource }}
        bgColor={bgColorString}
        textColor={textColorString}
      />
    </>
  )
}
