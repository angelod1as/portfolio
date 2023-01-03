import { ErrorProps, PostResult } from '#types/types'
import { FormikHelpers } from 'formik'
import { Dispatch, SetStateAction } from 'react'

type SubmitFormProps<T> = {
  fetcher: (props: T) => Promise<PostResult>
  values: T
  formikHelpers: FormikHelpers<T>
  setApiErrors: Dispatch<SetStateAction<ErrorProps[]>>
  setSuccess: Dispatch<SetStateAction<boolean>>
}

export const submitForm = async <T>({
  values,
  setSuccess,
  setApiErrors,
  fetcher,
}: SubmitFormProps<T>) => {
  setSuccess(false)

  try {
    const result = await fetcher(values)
    if (result.errors && result.errors?.length > 0) {
      return setApiErrors(result.errors)
    }
    setSuccess(true)
  } catch (error) {
    setApiErrors([
      {
        msg: 'An unknown error happenned, please contact Angelo',
      },
    ])
    console.error(error)
  }
}
