import Button from '@components/atoms/Button'
import { useTranslation } from '@i18n/i18n'
import { useRouter } from 'next/router'
import styled from 'styled-components'

export default function Custom404() {
  const { locale } = useRouter()
  const t = useTranslation(locale)

  return (
    <Wrapper>
      <h1>
        {t("I'm angelo and")}
        <br />
        <span>{t('this page does not exist')}</span>
      </h1>
      <Button inverted to="/">
        {t('Click here to go back')}
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    max-width: 620px;
    text-align: center;
    span {
      font-style: italic;
    }
  }
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.color.white};
  ${p => p.theme.loop.colorLoop('background-color')}
`
