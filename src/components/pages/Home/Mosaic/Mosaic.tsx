import { InnerLink } from '#components/common/InnerLink/InnerLink'
import React, { FC } from 'react'
import { TileProps, tiles } from 'src/helpers/verbs'
import style from './Mosaic.module.sass'

export const Mosaic = () => {
  return (
    <ul className="full-width">
      <div className={style.mosaic}>
        {tiles.map(({ title, bg }: TileProps) => {
          return <Tile bg={bg} title={title} key={title} />
        })}
      </div>
    </ul>
  )
}

const Tile: FC<TileProps> = ({ bg, title }) => {
  return (
    <li>
      <InnerLink href="#">
        <div className={`text-white ${style.tile} ${bg}`}>
          <div
            className={`${style.inside} transition-transform hover:scale-95`}
          >
            <p className="flex flex-col justify-center font-bold">
              <span className="text-xl">I do</span>
              <span className="text-3xl">{title}</span>
            </p>
          </div>
        </div>
      </InnerLink>
    </li>
  )
}
