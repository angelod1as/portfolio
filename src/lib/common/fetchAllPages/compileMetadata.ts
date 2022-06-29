import { Metadata, PageMetadata } from '#types/types'
import { TimestampToDate } from 'src/helpers/TimestampToDate'
import { PageType } from '.'
import { serialize } from '../MDX/serialize'

export const compileMetadata = async (
  pageMetadata: PageMetadata[],
  type: PageType
): Promise<PageMetadata[]> => {
  const compiledMetadatas = pageMetadata.map(async pageMetadata => {
    const { metadata } = pageMetadata

    const newMetadata: Metadata = {
      ...metadata,
      compiledTitle: await compileTitle(metadata.title, type),
      compiledSummary: await compileSummary(metadata.summary),
    }

    return {
      ...pageMetadata,
      metadata: newMetadata,
    }
  })

  return await Promise.all(compiledMetadatas)
}

const compileTitle = async (title: string, type: PageType) => {
  if (title) {
    const newTitle =
      type === 'pages' ? `I'm angelo and I do **${title}**` : title

    return (await serialize({ content: newTitle })).compiledSource
  }
}

const compileSummary = async (
  summary: Metadata['summary']
): Promise<Metadata['compiledSummary']> => {
  const compile = async (topic?: string) => {
    if (!topic) return undefined

    const promise = (await serialize({ content: topic })).compiledSource

    return promise
  }

  const numberWhen = summary?.when && Number(summary?.when)
  const dateWhen = numberWhen ? TimestampToDate(numberWhen) : undefined

  return {
    when: dateWhen,
    where: await compile(summary?.where),
    who: await compile(summary?.who),
    why: await compile(summary?.why),
    how: await compile(summary?.how),
  }
}
