import { handleMDXMedia } from '#lib/images/handleMDXMedia'
import {
  imageExtensions,
  ImageString,
  replaceStringImage,
} from '#lib/images/replaceStringImage'
import { Metadata, PageMetadata } from '#types/types'
import { TimestampToDate } from 'src/helpers/TimestampToDate'
import { PageType } from '.'
import { serialize } from '../MDX/serialize'

export const compileMetadata = async (
  pageMetadata: PageMetadata[],
  type: PageType
): Promise<PageMetadata[]> => {
  const compiledMetadatas = pageMetadata.map(async pageMetadata => {
    const { metadata, directory } = pageMetadata

    const newMetadata: Metadata = {
      ...metadata,
      compiledTitle: await compileTitle(metadata.title, type),
      compiledSummary: await compileSummary(metadata.summary),
      hero: compileHero(metadata.hero, directory),
    }

    return {
      ...pageMetadata,
      metadata: newMetadata,
    }
  })

  return await Promise.all(compiledMetadatas)
}

export const compileTitle = async (title: string, type: PageType) => {
  if (title) {
    const newTitle =
      type === 'pages' ? `I'm angelo and I do **${title}**` : title

    return (await serialize({ content: newTitle })).compiledSource
  }
  return null
}

const generateWhen = (when: string | number | null) => {
  return TimestampToDate(Number(when), ['day']) || null
}

export const compileSummary = async (
  summary: Metadata['summary']
): Promise<Metadata['compiledSummary']> => {
  const compile = async (topic: string | null) => {
    if (!topic) return null

    const promise = (await serialize({ content: topic })).compiledSource

    return promise
  }

  if (!summary) {
    return null
  }

  return {
    when: generateWhen(summary.when),
    ongoing: summary.ongoing ?? null,
    where: await compile(summary.where),
    who: await compile(summary.who),
    why: await compile(summary.why),
    what: await compile(summary.what),
  }
}

export const compileHero = (
  hero: Metadata['hero'],
  directory: string
): Metadata['hero'] => {
  if (!hero?.src || !hero?.alt) {
    return null
  }

  const okHeroImageFormat = imageExtensions.includes(hero.src.split('.')[1])

  const heroSrc = okHeroImageFormat ? (hero.src as ImageString) : undefined

  if (!heroSrc) {
    return null
  }

  handleMDXMedia(directory)

  return {
    ...hero,
    src: replaceStringImage(heroSrc, directory),
  }
}
