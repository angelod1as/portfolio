// import Head from 'next/head'
import { Big, Grid, Inside, Small, Tile, Link } from './styles'
import { v4 as uuid } from 'uuid'
import theme from '@styles/theme'
import { useCallback } from 'react'

interface ItemProps {
  slug: string
  title: string
  order: number
  hasido: boolean
  redir?: string
}

// TODO: Head & SEO
export default function Home({ homeData }) {
  console.log(homeData)

  const sortHome = useCallback((a, b) => {
    return a.order - b.order
  }, [])

  const colors = theme.tileColors

  return (
    <>
      {/* <NewsSlip /> */}
      <Grid>
        {homeData.sort(sortHome).map((item: ItemProps, i: number) => {
          const { title, hasido, slug } = item
          const link = item.redir ? item.redir : `/${slug}`
          if (title === 'stuff') {
            return (
              <Link href={link} key={uuid()}>
                <Tile>
                  <Inside color={colors[i % colors.length]}>
                    <Big>I{"'"}m angelo</Big>
                    <Big>
                      and I do <i>stuff</i>
                    </Big>
                    <Small>
                      (<i>please</i> click for more)
                    </Small>
                  </Inside>
                </Tile>
              </Link>
            )
          }
          return (
            <Tile href={link} key={uuid()}>
              <Inside color={colors[i % colors.length]}>
                {hasido ? <Small>I do</Small> : ''}
                <Big>{title}</Big>
              </Inside>
            </Tile>
          )
        })}
      </Grid>
    </>
  )
}
