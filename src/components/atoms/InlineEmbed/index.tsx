import Project, { ImageProps } from '@components/atoms/Project'
import makeSafeDate from '@components/utils/makeSafeDate'

export default function InlineEmbed({
  description,
  slug,
  title,
  coverImage,
  date,
}) {
  const newDate = new Date(date)
  return (
    <Project
      title={title}
      safeDate={makeSafeDate(newDate)}
      to={slug}
      lead={description}
      image={coverImage as ImageProps[]}
      horizontal
    />
  )
}
