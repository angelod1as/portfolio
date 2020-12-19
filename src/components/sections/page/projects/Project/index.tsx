import Link from 'next/link'
import { Wrapper, Image, Caption, H3, Lead } from './styles'

export interface ImageProps {
  url: string
}

export interface ProjectProps {
  image: ImageProps[]
  title: string
  lead: string
  safeDate: string
  to: string
}

export default function Project({
  image,
  title,
  lead,
  safeDate,
  to,
}: ProjectProps) {
  return (
    <Link href={`projects/${to}`}>
      <Wrapper>
        {image && image.length > 0 && <Image src={image[0].url} alt="" />}
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
