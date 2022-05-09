import { createContext, useContext } from 'react'
import { RandomColors } from 'src/helpers/colors'

export type ColorContextValue = {
  colors: RandomColors | undefined
}

const initialValues: ColorContextValue = {
  colors: undefined,
}

const ColorContext = createContext<ColorContextValue>(initialValues)

export type UseColorContext = () => ColorContextValue

export const useColorContext: UseColorContext = () => useContext(ColorContext)

export const ColorContextProvider = ColorContext.Provider
