import { FCC } from '#types/types'
import { Field, useFormikContext } from 'formik'
import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from 'react'
import { Error } from './Error'
import { Label } from './Label'

export const numberRegex = (type: 'tel' | 'number', negate = true) => {
  const regex = new RegExp(
    `[${negate ? '^' : ''}0-9.${type === 'tel' ? '+' : ''}]`,
    'g'
  )
  return regex
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  name: string
  label: string
  type: HTMLInputTypeAttribute
  placeholder: string
  as?: string
  textAreaLimit?: number
}

/**
 * Must be used inside a Formik form
 */
export const Input: FCC<InputProps> = ({
  className,
  name,
  label,
  type,
  placeholder,
  as,
  textAreaLimit,
  ...props
}) => {
  const { handleChange, setFieldError, values } =
    useFormikContext<Record<string, string>>()

  const onChange: ChangeEventHandler<HTMLInputElement> = event => {
    if (type === 'tel' || type === 'number') {
      event.target.value = event.target.value
        .toString()
        .replace(numberRegex(type), '')
        .replace(/(\..*)\./g, '$1')
    }
    handleChange(event)
  }

  const onClick = () => {
    setFieldError(name, undefined)
  }

  return (
    <div className={`${className ?? ''} w-full`}>
      <Label htmlFor={name}>{label}</Label>
      <Field
        type={type}
        name={name}
        className="w-full"
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        as={as}
        {...props}
      />
      {textAreaLimit && (
        <small
          className={`${values[name].length > textAreaLimit ? 'text-red' : ''}`}
        >
          {values[name].length}/{textAreaLimit}
        </small>
      )}
      <Error name={name} />
    </div>
  )
}
