import { FCC } from '#types/types'
import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  name: string
  label: string
  type: HTMLInputTypeAttribute
}

/**
 * Must be used inside a Formik form
 */
export const Select: FCC<InputProps> = () => {
  return null
  // TODO: Select
  // return (
  //   <div className={className}>
  //     <Label htmlFor={name}>{label}</Label>
  //     <Field as="select" name="color">
  //       <option value="red">Red</option>
  //       <option value="green">Green</option>
  //       <option value="blue">Blue</option>
  //     </Field>
  //     <ErrorMessage name={name} component="div" />
  //   </div>
  // )
}
