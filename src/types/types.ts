import { Verb } from 'src/helpers/verbs'

// Projects
export type ProjectFrontMatter = {
  date: Date
  title: string
  desc: string
  live: boolean
  tags: Verb[]
  image: string
  highlighted: boolean
}

export type ParsedProjectFrontMatter = Omit<ProjectFrontMatter, 'date'> & {
  date: string
}

export type ProjectData = {
  data: ProjectFrontMatter
  compiledSource: string
}

export type ProjectTileProps = Omit<
  ParsedProjectFrontMatter,
  'tags' | 'live'
> & {
  slug: string
}

// export type MdxProject = MDXRemoteSerializeResult<ProjectFrontMatter>

// export type About = {
//   about: MDXRemoteSerializeResult<FrontMatter>
//   contact: MDXRemoteSerializeResult<FrontMatter>
// }

// export type Locale = "pt-BR" | "en-US"
