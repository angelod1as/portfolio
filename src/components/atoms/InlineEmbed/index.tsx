import Project, { ImageProps } from '@components/atoms/Project'

interface InlineEmbedProps {
  description: string
  slug: string
  title: string
  coverImage: Record<string, any>
  date: string
}

export default function InlineEmbed({
  description,
  slug,
  title,
  coverImage,
  date,
}: InlineEmbedProps) {
  return (
    <Project
      title={title}
      date={date}
      to={slug}
      lead={description}
      image={coverImage as ImageProps[]}
      embed
    />
  )
}
