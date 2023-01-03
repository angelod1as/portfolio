import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { RandomColors, randomColors } from 'src/helpers/colors'
import { KaraokeParty } from '#components/pages/Party/karaoke'

const PartyPage: NextPage = () => {
  return <KaraokeParty />
}

export default PartyPage

type GetStaticPropsType = {
  colors: RandomColors
}

export const getStaticProps: GetStaticProps<GetStaticPropsType> = async () => {
  const colors = randomColors()

  return {
    props: { colors, slug: 'homepage' },
  }
}
