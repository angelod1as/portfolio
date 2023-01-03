import { ErrorProps, FCC, PostResult } from '#types/types'
import { Formik, FormikValues, Form as FormikForm } from 'formik'
import React, { ReactNode, useState } from 'react'
import { ApiError } from './ApiError'
import { submitForm } from './helpers/submitForm'
import { Submit } from './Submit'
import { Strong as StrongModifier } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { textColor as defaultTextColor } from 'src/helpers/colors'

type FormProps<T> = {
  fetcher: (props: T) => Promise<PostResult>
  initialValues: T
  validationSchema: unknown
  children: ReactNode
  submit?: {
    label?: string
    successMessage?: string
  }
  additionalWarning?: string
}

export const Form = <T extends FormikValues>({
  initialValues,
  validationSchema,
  fetcher,
  submit,
  additionalWarning,
  children,
}: FormProps<T>) => {
  const { colors } = useColorContext()
  const textColor = colors?.textColor ?? defaultTextColor[0]
  const [apiErrors, setApiErrors] = useState<ErrorProps[]>([])
  const [success, setSuccess] = useState(false)

  const Strong: FCC = ({ children }) => (
    <StrongModifier color={textColor}>{children}</StrongModifier>
  )

  return (
    <div>
      <Formik<T>
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        onSubmit={async (values, formikHelpers) =>
          await submitForm<T>({
            values,
            formikHelpers,
            setApiErrors,
            setSuccess,
            fetcher,
          })
        }
      >
        {() => (
          <FormikForm className="flex flex-col w-full gap-4">
            {children}

            <Submit label={submit?.label} />
            <ApiError errors={apiErrors} />
          </FormikForm>
        )}
      </Formik>

      {success && (
        <div className="mt-4">
          <p>
            <Strong>
              {submit?.successMessage ?? 'Dados enviados com sucesso!'}
            </Strong>
          </p>
        </div>
      )}

      {additionalWarning && (
        <p className="mt-8 text-xs ">{additionalWarning}</p>
      )}
    </div>
  )
}
