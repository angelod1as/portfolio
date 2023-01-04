import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { RandomColors, randomColors } from 'src/helpers/colors'
import { KaraokeParty } from '#components/pages/Party/karaoke'
import Head from 'next/head'

const PartyPage: NextPage = () => {
  const socialImagePath = 'angelodias.com.br/party/social/karaoke.png'

  return (
    <>
      <Head>
        <meta
          property="og:image"
          key="og:image"
          content={'https://' + socialImagePath}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@oicronofobico" />
        <meta
          property="twitter:image"
          key="twitter:image"
          content={'https://' + socialImagePath}
        />
      </Head>
      <KaraokeParty />
    </>
  )
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
