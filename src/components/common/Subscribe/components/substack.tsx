import { Link } from '#components/common/Links'
import { Loader } from '#components/common/Loader'
import { Strong as StrongModifier } from '#components/common/Strong'
import { FCC } from '#types/types'
import { useState } from 'react'

type FormElements = HTMLFormControlsCollection & {
  email: HTMLInputElement
  antirobot: HTMLInputElement
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
  succint?: boolean
}

export const Substack = ({ blog, succint }: SubstackProps) => {
  const Strong: FCC = ({ children }) => (
    <StrongModifier>{children}</StrongModifier>
  )

  const [errors, setErrors] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (event: React.FormEvent<SubstackFormElements>) => {
    event.preventDefault()
    const email = event.currentTarget.elements.email.value
    const antirobot = event.currentTarget.elements.antirobot.value

    if (antirobot) {
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
          Thanks for <span className="text-highlight">subscribing</span>
        </h2>

        <p className={`${blog ? 'mb-4' : 'mb-4'}`}>
          Please confirm your subscription in your email 😎
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full mb-8">
      {!succint && (
        <>
          <h2 className={`mb-4 ${blog ? '' : 'h2-as-h1'}`}>
            Read my <span className="text-highlight">Newsletter</span>
          </h2>
          <p>
            My{' '}
            <Strong>
              <Link href="https://www.cronofobia.com/">newsletter</Link>
            </Strong>{' '}
            is the home for my writings. This blog is deprecated (but I'll keep
            the existing articles here for reference).
          </p>

          <p className="mb-4">
            Ah, even though my website is in English, my newsletter currently
            has only <Strong>Brazilian Portuguese</Strong> content.
          </p>
        </>
      )}
      <div className="flex flex-col gap-y-2 sm:flex-row sm:items-center sm:gap-x-4">
        <label htmlFor="email" className="flex-1 block w-full">
          Email:
        </label>
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
            name="antirobot"
            tabIndex={-1}
            className="absolute left-[-5000px]"
            aria-hidden="true"
          />
        </div>
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          className="text-black bg-highlight border-highlight"
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
