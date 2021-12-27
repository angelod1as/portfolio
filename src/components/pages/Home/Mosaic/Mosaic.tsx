import Link from 'next/link'
import React, { FC } from 'react'
import style from './Mosaic.module.sass'

const tiles = [
  {
    title: 'coding',
    color: 'bg-black',
  },
  {
    title: 'design',
    color: 'bg-violet',
  },
  {
    title: 'sci-fi newspaper',
    color: 'bg-yellow',
  },
  {
    title: 'management',
    color: 'bg-red',
  },
  {
    title: 'talking',
    color: 'bg-blue',
  },
  {
    title: 'music',
    color: 'bg-orange',
  },
  {
    title: 'writing, comics & zines',
    color: 'bg-green',
  },
  {
    title: 'tarot reading',
    color: 'bg-pink',
  },
]

export const Mosaic = () => {
  return (
    <ul className="full-width">
      <div className={style.mosaic}>
        {tiles.map(({ title, color }: TileProps) => {
          return <Tile color={color} title={title} />
        })}
      </div>
    </ul>
  )
}

type TileProps = {
  color: string
  title: string
}

const Tile: FC<TileProps> = ({ color, title }) => {
  return (
    <li key="title">
      <Link href="#">
        <div className={`text-white ${style.tile} ${color}`}>
          <div className={style.inside}>
            <p className="flex flex-col justify-center font-bold">
              <span className="text-xl">I do</span>
              <span className="text-3xl">{title}</span>
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}
