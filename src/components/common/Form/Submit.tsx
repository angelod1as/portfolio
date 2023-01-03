import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { FCC } from '#types/types'
import { useFormikContext } from 'formik'
import React, { InputHTMLAttributes } from 'react'
import {
  bgColor as defaultBgColor,
  borderColor as defaultBorderColor,
} from 'src/helpers/colors'
import { Loader } from '../Loader'

type SubmitProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  label?: string
}

/**
 * Must be used inside a Formik form
 */
export const Submit: FCC<SubmitProps> = ({ className, label }) => {
  const { isSubmitting } = useFormikContext()
  const { colors } = useColorContext()
  const bgColor = colors?.bgColor ?? defaultBgColor[0]
  const borderColor = colors?.borderColor ?? defaultBorderColor[0]

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`${className ?? ''} ${bgColor} ${borderColor} mt-2`}
    >
      {isSubmitting ? <Loader /> : label}
    </button>
  )
}
