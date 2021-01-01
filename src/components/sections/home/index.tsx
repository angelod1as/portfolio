// import Head from 'next/head'
import { Big, Grid, Inside, Small, Tile, Link } from './styles'
import { v4 as uuid } from 'uuid'
import theme from '@styles/theme'
import { translate } from '@i18n/i18n'
import { useRouter } from 'next/router'

interface ItemProps {
  slug: string
  title: string
  order: number
  hasido: boolean
  redir?: string
  internalRedirect?: {
    fields: {
      slug: string
    }
  }
}

interface HomeProps {
  homeData: {
    content: [
      {
        fields: ItemProps
      }
    ]
  }
}

export default function Home({ homeData }: HomeProps) {
  const { locale } = useRouter()
  const colors = theme.tileColors
  const t = translate(locale)

  return (
    <>
      {/* <NewsSlip /> */}
      <Grid>
        {homeData.content.map((each, i: number) => {
          const { title, hasido, slug, redir, internalRedirect } = each.fields
          let link = `/${slug}`

          if (redir) {
            link = redir
          } else if (internalRedirect) {
            link = `projects/${internalRedirect.fields.slug}`
          }

          if (slug === 'stuff') {
            return (
              <Link href={link} key={uuid()}>
                <Tile>
                  <Inside color={colors[i % colors.length]}>
                    <Big>{t("I'm angelo")}</Big>
                    <Big>
                      {t('and I do')} <i>{t('stuff')}</i>
                    </Big>
                    <Small>
                      (<i>{t('please')}</i> {t('click for more')})
                    </Small>
                  </Inside>
                </Tile>
              </Link>
            )
          }
          return (
            <Link href={link} key={uuid()}>
              <Tile>
                <Inside color={colors[i % colors.length]}>
                  {hasido ? <Small>{t('I do')}</Small> : ''}
                  <Big>{title}</Big>
                </Inside>
              </Tile>
            </Link>
          )
        })}
      </Grid>
    </>
  )
}
