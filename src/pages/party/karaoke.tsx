import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import {
  RandomColors,
  randomColors,
  textColor as defaultTextColor,
} from 'src/helpers/colors'
import { Form, Formik } from 'formik'
import { Strong as StrongModifier } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { FCC } from '#types/types'
import { Input, numberRegex } from '#components/common/Form/Input'
import { Submit } from '#components/common/Form/Submit'
import { object as YupObject, string as YupString } from 'yup'

type FormProps = {
  name: string
  phone: number | ''
  email: string
}

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

const PartyPage: NextPage = () => {
  const { colors } = useColorContext()
  const textColor = colors?.textColor ?? defaultTextColor[0]

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

      <Formik<FormProps>
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        onSubmit={async () => console.log('submit')}
      >
        {() => (
          <Form className="flex flex-col w-full gap-4">
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
            <Submit label="Enviar 🎶" />
          </Form>
        )}
      </Formik>

      <p className="mt-8 text-xs ">
        Todas as informações desse formulário vão para um banco de dados
        sigiloso que só Angelo tem acesso — eles não serão compartilhados com
        terceiros e serão apagados depois da data da festa.
      </p>
    </div>
  )
}

export default PartyPage

type GetStaticPropsType = {
  colors: RandomColors
}

export const getStaticProps: GetStaticProps<GetStaticPropsType> = async () => {
  const colors = randomColors()

  return {
    props: { colors, slug: 'homepage' },
  }
}
