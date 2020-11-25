// import Head from 'next/head'
import { Big, Grid, Inside, Small, Tile, Link } from './styles'
import { v4 as uuid } from 'uuid'
import theme from '@styles/theme'
import Container from 'src/components/Container'
import { useCallback } from 'react'

// TODO: Head & SEO
export default function Home({ homeData }) {
  const sortHome = useCallback((a, b) => {
    return a.order - b.order
  }, [])
  const colors = theme.tileColors
  return (
    <Container seo="Angelo Dias's Portfolio">
      {/* <NewsSlip /> */}
      <Grid>
        {homeData.sort(sortHome).map((item, i) => {
          const { title, noIDo, id } = item
          const link = item.redir ? item.redir : `/${id}`
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
                {noIDo ? '' : <Small>I do</Small>}
                <Big>{title}</Big>
              </Inside>
            </Tile>
          )
        })}
      </Grid>
    </Container>
  )
}
