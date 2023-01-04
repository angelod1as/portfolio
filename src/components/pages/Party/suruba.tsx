import React, { Fragment } from 'react'
import { textColor as defaultTextColor } from 'src/helpers/colors'
import { Strong as StrongModifier } from '#components/common/Strong'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { ErrorProps, FCC } from '#types/types'
import { Input, numberRegex } from '#components/common/Form/Input'
import { object as YupObject, string as YupString } from 'yup'
import { Form } from '#components/common/Form/Form'
import { Link } from '#components/common/Links'
import { H2, H3, LI, UL } from '#components/common/Typography'

type FormProps = {
  name: string
  phone: string
  email: string
  read: 'false' | 'true' // because option must be string
  know: 'false' | 'true' // because option must be string
}

export type KaraokeFormProps = FormProps

const initialValues: FormProps = {
  name: '',
  phone: '',
  email: '',
  read: 'false',
  know: 'false',
}

const validationSchema = YupObject().shape({
  name: YupString().required('Ops, precisamos do seu nome'),
  phone: YupString()
    .required('Ops, seu telefone é obrigatório')
    .matches(numberRegex('tel', false))
    .min(8, 'Esse número não tá pequeno demais?')
    .max(16, 'Esse número é muito longo'),
  email: YupString().required('Ops, preencha seu e-mail'),
  know: YupString(),
  read: YupString(),
})

type PostResult = {
  errors?: ErrorProps[]
}

const postToNotion = async (props: FormProps): Promise<PostResult> => {
  const url = '/api/notion/suruba/create'

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
          Antes de tudo, você <Strong>deve</Strong> ler o texto abaixo. Sério.
          Leia. Depois, preencha o formulário no fim e aí é só esperar!
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
              { key: 'Valor', value: 'Ainda não sabemos, em torno de R$100*' },
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
          <p className="mt-4 text-xs">
            * Se você não puder ir exclusivamente por causa da grana, se
            inscreva mesmo assim e cite isso quando eu te contatar. Existem
            algumas vagas patrocinadas
          </p>
        </div>
      </div>

      <H2>
        Suruba <span className={textColor}>não é</span> bagunça
      </H2>
      <H3>Quem sou eu na fila do pão</H3>
      <p>
        Já <Strong>participei</Strong> e <Strong>organizei</Strong> algumas
        festas de gente pelada.
      </p>
      <p>
        Uma boa quantidade de gente já participou e <Strong>adorou</Strong> a
        experiência, especialmente pessoas interessadas em explorar a
        sexualidade em um espaço <Strong>seguro</Strong> e com o{' '}
        <Strong>respeito</Strong> como prioridade
      </p>
      <H3>
        <Strong>O que é</Strong> uma suruba?
      </H3>
      <p>
        Não tem segredo: é tipo um <Strong>churras</Strong> com os bróder, um
        get-together na casa de amigues, um petit-comitê com queijos e vinhos
      </p>
      <p>
        A diferença é que você pode <Strong>ficar pelado</Strong> e, se quiser,
        pode fazer sexo sem precisar sair escondido — nem pagar aquele motel de
        terceira na Augusta
      </p>

      <H3>Alguns exemplos reais</H3>
      <ul>
        <li>
          Uma festa na casa de uma colega com pizza, cerveja e{' '}
          <Strong>conversas sobre política</Strong> e música
        </li>
        <li>
          Um fim de semana no sítio com <Strong>jogo de STOP</Strong>, chá de
          camomila e fogueira (estava 1°C)
        </li>
        <li>
          Doze horas em num motel com piscina, pole dance,{' '}
          <Strong>jacuzzi</Strong> e banquete vegan.
        </li>
      </ul>
      <p>
        (Perceba que eu não citei sexo em nenhum dos exemplos. Essa é a
        diferença: <Strong>sexo não é a prioridade</Strong>)
      </p>

      <H3>
        O que <Strong>não é</Strong> uma suruba
      </H3>
      <p>
        As festas que organizo não são <Strong>eventos espontâneos</Strong> em
        que o sexo "acontece", como uma festa na casa de um amigo em que a
        galera bebeu um pouco mais. Não é uma festa BDSM ou fetichista, e também
        tem <Strong>zero a ver</Strong> com estabelecimentos como saunas ou
        casas de swing.
      </p>
      <p>
        As festas que organizo são feitas <Strong>de gente pra gente</Strong>,
        "pessoas físicas". Nunca viso lucro e sempre sou amparado por um grupo
        de pessoas — em sua maioria mulheres — antes, durante e depois da festa.
      </p>

      <H3>
        Diálogo é <Strong>essencial</Strong>
      </H3>
      <p>
        Não é uma exclusividade, mas a festa é feita por e para pessoas
        <Strong>não-monogâmicas</Strong> e <Strong>queer</Strong>. Pessoas
        monogâmicas e/ou hétero podem participar? Claro, mas saibam que estarão
        em um espaço em que as pessoas ficam umas com as outras sem essas
        amarras. Se alguém fizer algum avanço (com respeito) e você não quiser
        participar, só <Strong>diga não</Strong> e siga se divertindo 😀
      </p>
      <p>
        Por favor tenha suas DRs <Strong>antes</Strong> da festa e não durante.
      </p>
      <p>
        É importante que você fale para as pessoas organizadoras seus receios e
        medos, suas <Strong>expectativas</Strong> e fetiches. Assim, poderemos
        responder as dúvidas e dizer o que pode e o que não pode acontecer —
        baseado em nossa <Strong>experiência prévia</Strong>.
      </p>

      <H3>
        A <Strong>lista</Strong> de convidades
      </H3>
      <p>
        Sempre fazemos um <Strong>grupo do Whatsapp</Strong> antes da festa
        acontecer — umas semanas antes — para que as pessoas façam o cara-crachá
        e — principalmente — para que a gente <Strong>saque a interação</Strong>{' '}
        entre as pessoas.
      </p>
      <p>
        Importante: se qualquer um no grupo te incomodar,{' '}
        <Strong>fale com os organizadores</Strong> e agiremos de acordo.
      </p>
      <p>
        Nesse grupo você verá quem vai na festa, poderá{' '}
        <Strong>conversar</Strong> e trocar informações, e principalmente saberá
        detalhes granulares da festa — como por exemplo{' '}
        <Strong>se é necessário</Strong> levar algo (comida, bebida, toalha,
        etc) e a<Strong>política de substâncias</Strong> (se pode ter álcool,
        maconha ou psicodélicos). Ah, cocaína é{' '}
        <Strong>completamente proibida</Strong> e pode levar à expulsão antes ou
        durante a festa.
      </p>

      <H3>
        Filosofias <Strong>principais</Strong>
      </H3>
      <UL>
        <LI>
          <Strong>Sim é Sim</Strong>: se não for um "sim" explícito, trate como
          não. Dúvida, silêncio, talvez = não.
        </LI>
        <LI>
          <Strong>É sobre afeto</Strong>: espere abraçar, conversar, dar risada,
          sorrir e se divertir. Sexo sempre está e estará em segundo plano. Se
          sua intenção é só "passar a vara", você não é bem vinde.
        </LI>
        <LI>
          <Strong>Ninguém é obrigado a nada</Strong>: não quer comer? Não coma.
          Não quer beber? Não beba. Não quer cair de boca naquele belíssimo
          pênis? Não caia. É simples assim: as pessoas só fazem o que elas
          querem e ninguém é obrigado a nada. Não há peer-pressure.
        </LI>
        <LI>
          <Strong>Segurança em primeiro lugar</Strong>: camisinha é
          imprescindível e a falta do seu uso pode acarretar em expulsão. Aliás,
          pedimos aos casais acostumados com sexo sem camisinha para que cuidem
          em não dar um mal exemplo ou que evitem maus entendidos.
        </LI>
      </UL>

      <H3>
        Quero <Strong>mais</Strong> informações
      </H3>
      <p>
        Uma versão maior e mais detalhada desse texto está nos destaques no meu{' '}
        <Link href="https://www.instagram.com/oicronofobico/">Instagram</Link>.
      </p>

      <H2>
        Quero <Strong>participar</Strong>!
      </H2>

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
        sigiloso que só as pessoas organizadoras tem acesso — eles não serão compartilhados com
        terceiros e serão apagados depois da data da festa."
      >
        <Input label="Nome" name="name" type="text" className="col-span-2" />
        <Input label="Email" name="email" type="email" />
        <Input label="Whatsapp" name="phone" type="tel" />
        <Input
          label="Você conhece Angelo pessoalmente?"
          name="know"
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
