import Link from 'next/link'
import { Wrapper, Image, Caption, H3, Lead, ImageNotFound } from './styles'
import { VscWarning } from 'react-icons/vsc'

export interface ImageProps {
  url: string
}

export interface ProjectProps {
  image: ImageProps[]
  title: string
  lead: string
  safeDate: string
  to: string
  horizontal: boolean
}

export default function Project({
  image,
  title,
  lead,
  safeDate,
  to,
  horizontal,
}: ProjectProps) {
  return (
    <Link href={`/projects/${to}`}>
      <Wrapper {...{ horizontal }}>
        {image ? (
          image.length > 0 && <Image src={image[0].url} alt="" />
        ) : (
          <ImageNotFound>
            <VscWarning size={30} color="white" />
          </ImageNotFound>
        )}
        <Caption>
          <H3>{title}</H3>
          <Lead>
            {lead} <span>{safeDate}</span>
          </Lead>
        </Caption>
      </Wrapper>
    </Link>
  )
}
