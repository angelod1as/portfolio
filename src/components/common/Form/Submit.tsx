import { FCC } from '#types/types'
import { useFormikContext } from 'formik'
import React, { InputHTMLAttributes } from 'react'
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

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`${className ?? ''} bg-highlight border-highlight mt-2`}
    >
      {isSubmitting ? <Loader /> : label}
    </button>
  )
}
