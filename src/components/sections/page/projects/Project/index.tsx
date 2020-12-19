import Link from 'next/link'
import { Wrapper, Image, Caption, H3, Lead } from './styles'

export interface ProjectProps {
  image: string
  title: string
  lead: string
  date: string
  to: string
}

export default function Project({
  image,
  title,
  lead,
  date,
  to,
}: ProjectProps) {
  return (
    <Link href={to}>
      <Wrapper>
        <figure>
          <Image src={image} alt="" />
          <Caption>
            <H3>{title}</H3>
            <Lead>
              {lead} <span>{date}</span>
            </Lead>
          </Caption>
        </figure>
      </Wrapper>
    </Link>
  )
}
