import { Loader } from '#components/common/Loader'
import { Strong } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { useState } from 'react'
import {
  bgColor as defaultBgColor,
  borderColor as defaultBorderColor,
  textColor as defaultTextColor,
} from 'src/helpers/colors'

type FormElements = HTMLFormControlsCollection & {
  email: HTMLInputElement
  anti: HTMLInputElement
}
type SubstackFormElements = HTMLFormElement & {
  readonly elements: FormElements
}

type substackResult = {
  errors?: Array<{
    location: string
    msg: string
    param: string
    value: string
  }>
}

const fetchSubstack = async (email: string): Promise<substackResult> => {
  const substackUrl =
    'https://us-central1-substackapi.cloudfunctions.net/subscribe'
  const result = await fetch(substackUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      domain: 'oiangelodias.substack.com',
    }),
  })

  return await result.json()
}

type SubstackProps = {
  blog?: boolean
}

export const Substack = ({ blog }: SubstackProps) => {
  const { colors } = useColorContext()
  const bgColor = colors?.bgColor ?? defaultBgColor[0]
  const borderColor = colors?.borderColor ?? defaultBorderColor[0]
  const textColor = colors?.textColor ?? defaultTextColor[0]

  const [errors, setErrors] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (event: React.FormEvent<SubstackFormElements>) => {
    event.preventDefault()
    const email = event.currentTarget.elements.email.value
    const anti = event.currentTarget.elements.anti.value

    if (anti) {
      return
    }

    if (!email) {
      setErrors(['Oops, you need to input your email'])
    }

    setLoading(true)

    fetchSubstack(email)
      .then(result => {
        if (result.errors && result.errors?.length > 0) {
          const errorMessages = result.errors.map(error => error.msg)
          setErrors(errorMessages)
        }

        setSuccess(true)
      })
      .catch(error => {
        setErrors(['An unknown error happenned, please contact Angelo'])
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const removeError = () => {
    setErrors([])
  }

  if (loading) return <Loader />

  if (success) {
    return (
      <div>
        <h2 className={`${blog ? '' : 'mb-4 h2-as-h1'}`}>
          Thanks for <span className={textColor}>subscribing</span>
        </h2>

        <p className={`${blog ? 'mb-4' : 'mb-4'}`}>
          Please confirm your subscription in your email 😎
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full mb-8">
      <h2 className={`${blog ? '' : 'mb-4 h2-as-h1'}`}>
        <span className={textColor}>Subscribe</span> the newsletter
      </h2>

      <p className={`${blog ? 'mb-4' : 'mb-4'}`}>
        A very <Strong color={textColor}>occasional</Strong> & 100% not spammy
        account of a <Strong color={textColor}>overworking foreigner</Strong>{' '}
        trying to <Strong color={textColor}>find himself</Strong>. Hosted by
        Substack.
      </p>
      <div className="flex items-center gap-x-4">
        <label htmlFor="mce-EMAIL">Email:</label>
        <div className="w-full">
          <input
            type="email"
            defaultValue=""
            name="email"
            className="w-full"
            placeholder="mrspock@enterprise.com"
            onClick={removeError}
          />
          {/* Avoid spam by adding a hidden field that can only be reached by machines */}
          <input
            type="text"
            defaultValue=""
            name="anti"
            tabIndex={-1}
            className="absolute left-[-5000px]"
            aria-hidden="true"
          />
        </div>
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          className={`${bgColor} ${borderColor}`}
        />
      </div>
      {errors.length > 0 && (
        <div className="mt-2 text-sm">
          <p className="mt-2 mb-0 text-sm font-bold text-red">
            Bzz Bzz! Error! Error!
          </p>
          <ul>
            {errors.map((error, index) => {
              return (
                <li key={index} className="list-disc list-inside">
                  {error}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </form>
  )
}
