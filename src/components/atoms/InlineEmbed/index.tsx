import Project, { ImageProps } from '@components/atoms/Project'

export default function InlineEmbed({
  description,
  slug,
  title,
  coverImage,
  date,
}) {
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
