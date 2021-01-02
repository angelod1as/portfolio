import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import { BG, Flag, Switch, Slider } from './styles'

interface LocaleSwitcherProps {
  setLoading: Dispatch<SetStateAction<boolean>>
}

export default function LocaleSwitcher({ setLoading }: LocaleSwitcherProps) {
  const router = useRouter()

  const { locales, locale, asPath } = router

  const changeLanguage = () => {
    setLoading(true)
    const newLocale = locales.filter(each => each !== locale)[0]
    router
      .push(asPath, asPath, { locale: newLocale })
      .then(() => setLoading(false))
  }

  return (
    <BG>
      <Flag>
        <span role="img" aria-label="Portuguese">
          🇧🇷
        </span>
      </Flag>
      <Switch>
        <input
          type="checkbox"
          onChange={changeLanguage}
          checked={locale !== 'pt'}
        />
        <Slider />
      </Switch>
      <Flag>
        <span role="img" aria-label="English">
          🇬🇧
        </span>
      </Flag>
    </BG>
  )
}
