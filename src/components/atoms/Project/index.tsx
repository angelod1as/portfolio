import Link from 'next/link'
import {
  Wrapper,
  Image,
  ImageWrapper,
  Caption,
  H3,
  Lead,
  ImageNotFound,
  Small,
} from './styles'
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
  embed?: boolean
}

export default function Project({
  image,
  title,
  lead,
  safeDate,
  to,
  embed,
}: ProjectProps) {
  return (
    <Link href={`/projects/${to}`}>
      <Wrapper {...{ embed }}>
        <ImageWrapper>
          {image ? (
            image.length > 0 && <Image src={image[0].url} alt="" />
          ) : (
            <ImageNotFound>
              <VscWarning size={30} color="white" />
            </ImageNotFound>
          )}
        </ImageWrapper>
        <Caption>
          <H3>{title}</H3>
          <Lead>
            {lead} <span>{safeDate}</span>
          </Lead>
          {embed && <Small>click to visit</Small>}
        </Caption>
      </Wrapper>
    </Link>
  )
}
