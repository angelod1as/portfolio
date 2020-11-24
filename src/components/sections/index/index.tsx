// import Head from 'next/head'
import Container from 'src/components/Container'
import { Big, Grid, Inside, Small, Text, Tile } from './styles'
import { v4 as uuid } from 'uuid'
import theme from '@styles/theme'

interface TileProp {
  id: string
  noIDo: boolean
  order: number
  title: string
  type: string
  redir?: string
}

interface HomeProps {
  homeData: TileProp[]
}

export default function Home({ homeData }: HomeProps) {
  const colors = theme.tileColors
  return (
    <Container seo="Angelo Dias's Portfolio">
      {/* <NewsSlip /> */}
      <Grid>
        <p>TESTE</p>
        {homeData.map((item, i) => {
          const { title, noIDo, id } = item
          const link = item.redir ? item.redir : `/${id}`
          if (title === 'stuff') {
            return (
              <Tile href={link} key={uuid()}>
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
