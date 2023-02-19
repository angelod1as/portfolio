import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { RandomColors, randomColors } from 'src/helpers/colors'
import { getPartyPages, partyPages, PartyPages } from '#lib/party/getPartyPages'
import { SurubaParty } from '#components/pages/Party/suruba'
import Head from 'next/head'

const PartyPage: NextPage<{ slug: PartyPages }> = ({ slug }) => {
  const socialImagePath = `angelodias.com.br/party/social/${slug as string}.png`

  const NewHead = (
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
  )
  if (slug === 'suruba')
    // yep, that's it.
    return (
      <>
        {NewHead}
        <SurubaParty />
      </>
    )

  // Being redirected before falling here, see below
  return null
}

export default PartyPage

type GetStaticPropsType = {
  colors: RandomColors
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPages = await getPartyPages()
  const paths = allPages.map(page => ({
    params: {
      slug: page,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  GetStaticPropsType
> = async context => {
  const colors = randomColors()

  if (
    context.params?.slug &&
    !partyPages.includes(context.params.slug as PartyPages)
  ) {
    return {
      notFound: true,
    }
  }

  return {
    props: { colors, slug: context.params?.slug },
  }
}
