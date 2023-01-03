import { FCC } from '#types/types'
import { ErrorMessage, Field } from 'formik'
import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import { Label } from './Label'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  name: string
  label: string
  type: HTMLInputTypeAttribute
}

/**
 * Must be used inside a Formik form
 */
export const Select: FCC<InputProps> = ({ className, name, label, type }) => {
  return (
    <div className={className}>
      <Label htmlFor={name}>{label}</Label>
      <Field as="select" name="color">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </Field>
      <ErrorMessage name={name} component="div" />
    </div>
  )
}
