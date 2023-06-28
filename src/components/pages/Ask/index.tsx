import { Form } from '#components/common/Form/Form'
import { Input } from '#components/common/Form/Input'
import { Link } from '#components/common/Links'
import { MDX } from '#components/common/MDX'
import { NewHead } from '#components/common/NewHead'
import { Strong as StrongModifier } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { FCC, MDXReturn, PostResult } from '#types/types'
import { textColor as defaultTextColor } from 'src/helpers/colors'
import { removeSymbolsFromString } from 'src/helpers/removeSymbolsFromString'
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

type AskProps = { content: MDXReturn }

export const Ask: FCC<AskProps> = ({ content }) => {
  const { colors } = useColorContext()
  const textColor = colors?.textColor ?? defaultTextColor[0]

  const { compiledSource, metadata } = content

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
      {metadata?.title && (
        <NewHead
          title={removeSymbolsFromString(metadata.title)}
          description={
            metadata.description
              ? removeSymbolsFromString(metadata.description)
              : ''
          }
          image={metadata.socialImagePath ?? undefined}
        />
      )}
      <MDX
        mdx={{
          compiledSource,
          components: {
            AskForm: () => (
              <Form<FormProps>
                fetcher={postToNotion}
                initialValues={initialValues}
                validationSchema={validationSchema}
                submit={{
                  successMessage: successMessage,
                  label: 'Enviar',
                }}
                className="my-8"
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
                  textAreaLimit={1000}
                />
              </Form>
            ),
            // Disabling OldQuestions because of low usage
            // OldQuestions: () => <OldQuestions />,
          },
        }}
        metadata={metadata}
        type="clean"
      />
    </div>
  )
}
