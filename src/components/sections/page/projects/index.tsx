import { IProject } from 'src/@types/generated/contentful'
import Project, { ImageProps } from '@components/atoms/Project'

import { Wrapper, H2, Mosaic, ProjectHolder } from './styles'
import { useRouter } from 'next/router'
import { useTranslation } from '@i18n/i18n'

interface ProjectsProps {
  items: Array<{
    fields: IProject['fields']
  }>
}

export default function Projects({ items }: ProjectsProps) {
  const { locale } = useRouter()
  const t = useTranslation(locale)

  return (
    <Wrapper>
      <H2>{t('Latest projects')}</H2>
      <Mosaic>
        {items.map(
          ({ fields: { date, description, slug, title, coverImage } }, i) => {
            return (
              <ProjectHolder key={`${slug}-${i}`}>
                <Project
                  title={title}
                  date={date}
                  to={slug}
                  lead={description}
                  image={coverImage as ImageProps[]}
                />
              </ProjectHolder>
            )
          }
        )}
      </Mosaic>
    </Wrapper>
  )
}
