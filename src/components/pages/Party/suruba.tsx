import React, { Fragment } from 'react'
import { textColor as defaultTextColor } from 'src/helpers/colors'
import { Strong as StrongModifier } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { ErrorProps, FCC } from '#types/types'
import { Input, numberRegex } from '#components/common/Form/Input'
import { object as YupObject, string as YupString } from 'yup'
import { Form } from '#components/common/Form/Form'

type FormProps = {
  name: string
  phone: string
  message: string
  read: 'false' | 'true' // because option must be string
  howKnow: 'false' | 'true' // because option must be string
}

export type KaraokeFormProps = FormProps

const initialValues: FormProps = {
  name: '',
  phone: '',
  message: '',
  read: 'false',
  howKnow: 'false',
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
  const url = '/api/notion/party/karaoke'

  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(props),
  })

  return await result.json()
}

export const SurubaParty = () => {
  const { colors } = useColorContext()
  const textColor = colors?.textColor ?? defaultTextColor[0]

  const Strong: FCC = ({ children }) => (
    <StrongModifier color={textColor}>{children}</StrongModifier>
  )

  return (
    <div>
      <h2 className="mb-4 h2-as-h1">
        Festa de <span className={textColor}>gente pelada</span>
      </h2>
      <div className="flex flex-col gap-4 my-8">
        <p>
          Você deve ter chegado aqui pelo Instagram ou pois Angelo te enviou
          esta página com carinho. De qualquer modo, bem vinde.
        </p>
        <p>
          Esse breve formulário serve para captar quem são as pessoas a fim de
          participar de uma <Strong>festa de adulto</Strong>, a famosa suruba,
          organizada por Angelo e um grupo de pessoas amigas.
        </p>
        <p>
          Antes de tudo, você <Strong>deve</Strong> ler esse texto. Sério. Leia.
          Depois, preencha abaixo e aí é só esperar!
        </p>
        <div>
          <Strong>Dados da festa</Strong>
          <dl className="grid grid-cols-5 mt-2 gap-y-4">
            {[
              {
                key: 'Local',
                value: (
                  <>
                    <b>Motel Harmony</b>
                    <br /> Rua Mário R Pereira 152 (Rap. Tavares km 17,5)
                    <br />
                    São Paulo SP
                  </>
                ),
              },
              {
                key: 'Data',
                value: '25 de Fevereiro',
              },
              {
                key: 'Horário',
                value: 'Meio-dia à meia-noite — para quem dorme cedo',
              },
              { key: 'Valor', value: 'Ainda não sabemos, em torno de R$100' },
              {
                key: 'Lotação',
                value: 'de 25 a 30 pessoas — avaliadas com cuidado!',
              },
            ].map(({ key, value }) => (
              <Fragment key={key}>
                <dt className={`${textColor} font-bold`}>{key}</dt>
                <dd className="col-span-4">{value}</dd>
              </Fragment>
            ))}
          </dl>
        </div>
      </div>

      <Form<FormProps>
        className="md:grid md:grid-cols-2"
        fetcher={postToNotion}
        initialValues={initialValues}
        validationSchema={validationSchema}
        submit={{
          label: 'Enviar',
          className: 'md:col-span-2',
        }}
        additionalWarning="Todas as informações desse formulário vão para um banco de dados
        sigiloso que só Angelo tem acesso — eles não serão compartilhados com
        terceiros e serão apagados depois da data da festa."
      >
        <Input label="Nome" name="name" type="text" className="col-span-2" />
        <Input label="Email" name="email" type="email" />
        <Input label="Whatsapp" name="phone" type="tel" />
        <Input
          label="Você conhece Angelo pessoalmente?"
          name="howKnow"
          type="select"
          selectOptions={[
            {
              label: 'Não',
              value: 'false',
            },
            {
              label: 'Sim',
              value: 'true',
            },
          ]}
        />
        <Input
          label="Você leu o texto completo sobre como a festa funciona?"
          name="read"
          type="select"
          selectOptions={[
            {
              label: 'Não li',
              value: 'false',
            },
            {
              label: 'Claro que li',
              value: 'true',
            },
          ]}
        />
      </Form>
    </div>
  )
}
