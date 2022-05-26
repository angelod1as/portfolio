import { createContext, useContext } from 'react'
import { RandomColors } from 'src/helpers/colors'

export type ColorContextValue = {
  colors: RandomColors
}

const initialValues: ColorContextValue = {
  colors: {
    bgColor: 'bg-yellow',
    borderColor: 'border-yellow',
    textColor: 'text-yellow',
    beforeTextColor: 'before:text-yellow',
  },
}

const ColorContext = createContext<ColorContextValue>(initialValues)

export type UseColorContext = () => ColorContextValue

export const useColorContext: UseColorContext = () => useContext(ColorContext)

export const ColorContextProvider = ColorContext.Provider
