import Project, { ImageProps } from '@components/atoms/Project'
import makeSafeDate from '@components/utils/makeSafeDate'
import { useRouter } from 'next/router'

export default function InlineEmbed({
  description,
  slug,
  title,
  coverImage,
  date,
}) {
  const { locale } = useRouter()
  const newDate = new Date(date)
  return (
    <Project
      title={title}
      safeDate={makeSafeDate(newDate, locale)}
      to={slug}
      lead={description}
      image={coverImage as ImageProps[]}
      embed
    />
  )
}
