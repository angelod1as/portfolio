import { useRouter } from 'next/router'
import { Wrapper, BG, Flag, Switch, Slider } from './styles'

export default function LocaleSwitcher() {
  const router = useRouter()

  const { locales, locale } = router

  const changeLanguage = () => {
    const newLocale = locales.filter(each => each !== locale)[0]
    router.push(router.route, router.route, { locale: newLocale })
  }

  return (
    <Wrapper>
      <BG>
        <Flag>
          <span role="img" aria-label="Portuguese">
            🇧🇷
          </span>
        </Flag>
        <Switch onChange={changeLanguage}>
          <input type="checkbox" />
          <Slider />
        </Switch>
        <Flag>
          <span role="img" aria-label="English">
            🇬🇧
          </span>
        </Flag>
      </BG>
    </Wrapper>
  )
}
