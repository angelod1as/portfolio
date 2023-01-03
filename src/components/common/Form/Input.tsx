import { FCC } from '#types/types'
import { Field, useFormikContext } from 'formik'
import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
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
  label: ReactNode
  type: HTMLInputTypeAttribute
  placeholder?: string
  as?: string
  textAreaLimit?: number
  selectOptions?: Array<{ value: string; label: string }>
}

const getComponent = (type: HTMLInputTypeAttribute) => {
  switch (type) {
    case 'textarea':
      return 'textarea'
    case 'select':
      return 'select'
    default:
      return undefined
  }
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
  selectOptions,
  ...props
}) => {
  const { handleChange, setFieldError, values } =
    useFormikContext<Record<string, string>>()

  const onChange: ChangeEventHandler<HTMLInputElement> = event => {
    if (type === 'tel' || type === 'number') {
      event.target.value = event.target.value
        .toString()
        // need to do checking again because of TS
        .replace(numberRegex(type === 'tel' ? 'tel' : 'number'), '')
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
        className="w-full mt-1"
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        as={as ?? getComponent(type)}
        {...props}
      >
        {selectOptions?.map(({ label, value }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          )
        })}
      </Field>
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
