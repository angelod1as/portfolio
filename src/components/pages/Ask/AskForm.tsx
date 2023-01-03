import { Form } from '#components/common/Form/Form'
import { Input } from '#components/common/Form/Input'
import { Link } from '#components/common/Links'
import { Strong as StrongModifier } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { FCC, PostResult } from '#types/types'
import { textColor as defaultTextColor } from 'src/helpers/colors'
import { object as YupObject, string as YupString } from 'yup'

type FormProps = {
  message: string
  name?: string
}

const postToNotion = async (props: FormProps): Promise<PostResult> => {
  const url = '/api/notion/ask/create'

  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(props),
  })

  return await result.json()
}

const initialValues = {
  name: '',
  message: '',
}

const validationSchema = YupObject().shape({
  name: YupString(),
  message: YupString().required('Ops, parece que você não escreveu nada'),
})

export const AskForm = () => {
  const { colors } = useColorContext()
  const textColor = colors?.textColor ?? defaultTextColor[0]

  const Strong: FCC = ({ children }) => (
    <StrongModifier color={textColor}>{children}</StrongModifier>
  )

  const successMessage = (
    <>
      <p>
        <Strong>Enviado!</Strong>
      </p>
      <p>
        O que acha de fazer outra pergunta? Não esqueça de assinar o podcast{' '}
        <Link href="/podcast">Cronofobia</Link> para escutar sua resposta!
      </p>
    </>
  )

  return (
    <div className="w-full mb-8">
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

      <Form<FormProps>
        fetcher={postToNotion}
        initialValues={initialValues}
        validationSchema={validationSchema}
        submit={{
          successMessage: successMessage,
          label: 'Enviar',
        }}
      >
        <Input
          label="Nome (opcional)"
          name="name"
          placeholder="Mr Spock"
          type="text"
        />

        <Input
          label="Pergunta:"
          name="message"
          placeholder="Angelo, fale sobre..."
          type="textarea"
          as="textarea"
          textAreaLimit={1000}
        />
      </Form>
    </div>
  )
}
