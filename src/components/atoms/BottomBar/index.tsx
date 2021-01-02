import { Dispatch, SetStateAction } from 'react'
import LocaleSwitcher from './LocaleSwitcher'
import HomeButton from './HomeButton'
import { Wrapper } from './styles'

interface BottomBarProps {
  setLoading: Dispatch<SetStateAction<boolean>>
}

export default function BottomBar({ setLoading }: BottomBarProps) {
  return (
    <Wrapper>
      <HomeButton />
      <LocaleSwitcher {...{ setLoading }} />
    </Wrapper>
  )
}
