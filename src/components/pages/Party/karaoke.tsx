import React from 'react'
import { textColor as defaultTextColor } from 'src/helpers/colors'
import { Strong as StrongModifier } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { ErrorProps, FCC } from '#types/types'
import { Input, numberRegex } from '#components/common/Form/Input'
import { object as YupObject, string as YupString } from 'yup'
import { Form } from '#components/common/Form/Form'
import { useGetNotion } from '#components/hooks/useGetNotion'
import { Loader } from '#components/common/Loader'

type FormProps = {
  name: string
  phone: string
  email: string
}

export type KaraokeFormProps = FormProps

const initialValues: FormProps = {
  name: '',
  phone: '',
  email: '',
}

const validationSchema = YupObject().shape({
  name: YupString().required('Ops, precisamos do seu nome'),
  phone: YupString()
    .required('Ops, seu telefone é obrigatório')
    .matches(numberRegex('tel', false))
    .min(8, 'Esse número não tá pequeno demais?')
    .max(16, 'Esse número é muito longo'),
  email: YupString().required('Ops, preencha seu e-mail'),
})

type PostResult = {
  errors?: ErrorProps[]
}

const postToNotion = async (props: FormProps): Promise<PostResult> => {
  const url = '/api/notion/karaoke/create'

  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(props),
  })

  return await result.json()
}

export type NotionResponse = {
  people: Array<{ person: string }>
}

export const KaraokeParty = () => {
  const { colors } = useColorContext()
  const textColor = colors?.textColor ?? defaultTextColor[0]

  const { data, error, isLoading } = useGetNotion<NotionResponse>('karaoke')

  const Strong: FCC = ({ children }) => (
    <StrongModifier color={textColor}>{children}</StrongModifier>
  )

  return (
    <div>
      <h2 className="mb-4 h2-as-h1">
        Vem <span className={textColor}>cantar</span> comigo!
      </h2>
      <div className="flex flex-col gap-4 my-8">
        <p>Essa é minha versão dos "eventos do Face", porém sem Face.</p>
        <p>
          Se você tá a fim de ir no{' '}
          <Strong>Karaokê de Aniversário do Angelo</Strong>, bote abaixo seu
          nome, email e zupzap.
        </p>
        <p>Entro em contato quando tiver mais infos sobre o evento.</p>
      </div>

      <Form<FormProps>
        fetcher={postToNotion}
        initialValues={initialValues}
        validationSchema={validationSchema}
        submit={{
          label: 'Enviar',
        }}
        additionalWarning="Todas as informações desse formulário vão para um banco de dados
        sigiloso que só as pessoas organizadoras tem acesso — eles não serão compartilhados com
        terceiros e serão apagados depois da data da festa."
      >
        <Input label="Nome" name="name" type="text" placeholder="Angelo" />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="angelo@teste.com"
        />
        <Input
          label="Whatsapp"
          name="phone"
          type="tel"
          placeholder="1112345678"
          pattern="[0-9]+"
        />
      </Form>

      <h2 className="mt-8 mb-4">
        Quem já <span className={textColor}>confirmou</span>?
      </h2>
      <div className="grid grid-cols-2 gap-y-1 gap-x-2 md:grid-cols-3">
        {isLoading && <Loader />}
        {data?.error ??
          (error && (
            <div className="w-full text-sm font-bold text-red">
              Ops, houve algum erro e o servidor não conseguiu buscar a lista de
              pessoas
            </div>
          ))}
        {data?.people.map((person, index) => (
          <span key={person.person + index.toString()}>{person.person}</span>
        ))}
      </div>
    </div>
  )
}