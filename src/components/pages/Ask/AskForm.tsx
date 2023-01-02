import { Link } from '#components/common/Links'
import { Loader } from '#components/common/Loader'
import { Strong as StrongModifier } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { FCC } from '#types/types'
import { useState } from 'react'
import {
  bgColor as defaultBgColor,
  borderColor as defaultBorderColor,
  textColor as defaultTextColor,
} from 'src/helpers/colors'

export type AskFormProps = {
  message: string
  name?: string
}

type FormElements = HTMLFormControlsCollection & {
  [Key in keyof AskFormProps]: HTMLInputElement
} & { antirobot: HTMLInputElement }

type AskFormElements = HTMLFormElement & {
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

const postToNotion = async (props: AskFormProps): Promise<substackResult> => {
  const url = '/api/notion/create'

  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(props),
  })

  return await result.json()
}

const initialFormValues = {
  name: '',
  message: '',
}

export const AskForm = () => {
  const { colors } = useColorContext()
  const bgColor = colors?.bgColor ?? defaultBgColor[0]
  const borderColor = colors?.borderColor ?? defaultBorderColor[0]
  const textColor = colors?.textColor ?? defaultTextColor[0]

  const Strong: FCC = ({ children }) => (
    <StrongModifier color={textColor}>{children}</StrongModifier>
  )

  const [errors, setErrors] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formValues, setFormValues] = useState<AskFormProps>(initialFormValues)
  const characterLimit = 1000
  const overLimit = formValues.message.length > characterLimit

  const handleSubmit = (event: React.FormEvent<AskFormElements>) => {
    setSuccess(false)
    event.preventDefault()
    const name = formValues.name
    const message = formValues.message
    const antirobot = event.currentTarget.elements.antirobot.value

    if (antirobot) {
      return
    }

    if (!message) {
      setErrors(['Oops, o nome é opcional, mas a mensagem não!'])
    }

    if (message.length > characterLimit) {
      setErrors([`Ooops, há um limite de ${characterLimit} caracteres`])
    }

    setLoading(true)
    postToNotion({ name, message })
      .then(result => {
        if (result.errors && result.errors?.length > 0) {
          const errorMessages = result.errors.map(error => error.msg)
          setErrors(errorMessages)
        }

        setSuccess(true)
        setFormValues(initialFormValues)
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

  const handleChange = (prop: keyof AskFormProps, value: string) => {
    setFormValues(state => ({
      ...state,
      [prop]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="w-full mb-8">
      <h2 className="mb-4 h2-as-h1">
        Ask me <span className={textColor}>anything</span>
      </h2>
      <p className="mb-8 italic small">
        This page is in Brazilian Portuguese, as it's a resource for my podcast.
        Sorry, English-only speakers!
      </p>
      <p className="mb-4">
        Pergunte-me qualquer coisa. Sério, <Strong>qualquer</Strong> coisa. Sua
        pergunta — provavelmente — será lida e respondida lá no meu{' '}
        <Strong>
          <Link href="/podcast">podcast</Link>
        </Strong>
        .
      </p>
      {/* Avoid spam by adding a hidden field that can only be reached by machines */}
      <input
        type="text"
        defaultValue=""
        name="antirobot"
        tabIndex={-1}
        className="absolute left-[-5000px]"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="message" className="flex-1 block w-full">
            Nome (opcional):
          </label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={e => handleChange('name', e.target.value)}
            className="w-full"
            placeholder="Mr Spock"
            onClick={removeError}
          />
        </div>
        <div>
          <label htmlFor="message" className="flex-1 block w-full">
            Pergunta:
          </label>
          <textarea
            value={formValues.message}
            name="message"
            className="w-full"
            onChange={e => handleChange('message', e.target.value)}
            placeholder="Angelo, fale sobre..."
            onClick={removeError}
            required
          />
          <small className={`${overLimit ? 'text-red' : ''}`}>
            {formValues.message.length}/{characterLimit}
          </small>
        </div>
        {loading ? (
          <div className="flex flex-col items-center justify-center w-full">
            <Loader />
          </div>
        ) : (
          <input
            type="submit"
            value="Send"
            name="send"
            className={`${bgColor} ${borderColor} mt-2`}
            disabled={overLimit}
          />
        )}
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
      {success && (
        <div className="mt-4">
          <p>
            <Strong>Enviado!</Strong>
          </p>
          <p>
            O que acha de fazer outra pergunta? Não esqueça de assinar o podcast{' '}
            <Link href="/podcast">Cronofobia</Link> para escutar sua resposta!
          </p>
        </div>
      )}
    </form>
  )
}
