import Image from 'next/image'
import React from 'react'

import placeholder from 'public/placeholder/placeholder.jpg'
import { Link } from '#components/common/Links'
import { Tags } from '#components/common/Tags'
import { Verb } from 'src/helpers/verbs'

type HighlightedProps = {
  image: StaticImageData
  title: string
  subtitle: string
  url: string
  tags: Verb[]
}

const highlighted: HighlightedProps[] = [
  {
    image: placeholder,
    title: 'Tempos Fantásticos',
    subtitle: 'the sci-fi newspaper',
    url: '#',
    tags: ['coding', 'writing', 'design'],
  },
  {
    image: placeholder,
    title: 'A World of Walls',
    subtitle: 'international award-winning publication',
    url: '#',
    tags: ['design', 'coding', 'management'],
  },
  {
    image: placeholder,
    title: 'Cronofobia',
    subtitle: 'a zine experiment & daily podcast',
    url: '#',
    tags: ['audio', 'coding', 'design', 'writing', 'talking'],
  },
  {
    image: placeholder,
    title: 'Combo Breaker',
    subtitle: 'a silent comic written by me and drawn by Silva João',
    url: '#',
    tags: ['writing'],
  },
]

export const Highlighted = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3>highlighted projects</h3>
      <div className="flex flex-col gap-4">
        {highlighted.map(({ title, subtitle, image, url, tags }) => {
          return (
            <Link inner key={title} href={url} block>
              <div className="flex items-center gap-4">
                <div className={`w-28 h-28 relative`}>
                  <Image src={image} alt={title} className="grayscale" />
                </div>
                <div className="flex-1 not-italic">
                  <p>{title}</p>
                  <p className="text-sm font-normal">{subtitle}</p>
                  <div className="mt-2">
                    <Tags tags={tags} />
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
