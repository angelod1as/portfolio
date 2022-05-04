import React, { FC } from 'react'
import { RandomColors } from 'src/helpers/colors'
import { Contact } from './Contact'

type FooterProps = {
  colors: RandomColors
}

export const Footer: FC<FooterProps> = ({ colors }) => {
  return (
    <footer className="py-20">
      <Contact colors={colors} />
    </footer>
  )
}
