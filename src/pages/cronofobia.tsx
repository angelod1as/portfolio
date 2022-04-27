import { Podcast, PodcastProps } from '#components/pages/Podcast'
import { getPageText } from '#lib/getPageText'
import { GetStaticProps } from 'next'
import React from 'react'

const PodcastPage = ({ compiledSource }: PodcastProps) => {
  return <Podcast compiledSource={compiledSource} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { compiledSource } = await getPageText('cronofobia')
  const props: PodcastProps = {
    compiledSource,
  }

  return {
    props,
  }
}

export default PodcastPage
