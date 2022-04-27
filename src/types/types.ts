import { TOCGroup } from '#components/common/TOC'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Verb, VerbObject } from 'src/helpers/verbs'

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

export type ProjectFullData = {
  data: ProjectFrontMatter & {
    slug: string
    toc: TOCGroup
  }
  compiledSource: string
  category: VerbObject
}

export type ProjectTileProps = Omit<
  ParsedProjectFrontMatter,
  'tags' | 'live'
> & {
  category: VerbObject
  slug: string
}

// Blog

export type BlogFrontMatter = {
  createdAt: Date
  updatedAt?: Date
  title: string
  desc: string
  tags: string[]
  image: string
  highlighted?: boolean
  wip: boolean
}

export type BlogFullData = {
  data: BlogFrontMatter & {
    slug: string
    toc: TOCGroup
  }
  compiledSource: string
}

export type ParsedBlogFrontMatter = Omit<
  BlogFrontMatter,
  'createdAt' | 'updatedAt'
> & {
  createdAt: string
  updatedAt?: string
}

export type BlogTileProps = Omit<ParsedBlogFrontMatter, 'tags' | 'wip'> & {
  slug: string
}

// MDX

export type MDXProps = MDXRemoteSerializeResult & {
  components?: Record<string, React.ReactNode>
  lazy?: boolean
}
