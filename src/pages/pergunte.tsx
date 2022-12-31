import { Ask } from '#components/pages/Ask'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { RandomColors, randomColors } from 'src/helpers/colors'

const AskPage: NextPage = () => {
  return <Ask />
}

export default AskPage

type GetStaticPropsType = {
  colors: RandomColors
}

export const getStaticProps: GetStaticProps<GetStaticPropsType> = async () => {
  const colors = randomColors()

  return {
    props: { colors, slug: 'homepage' },
  }
}
