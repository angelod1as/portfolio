import React from 'react'
import { Strong as StrongModifier } from '#components/common/Strong'
import { FCC } from '#types/types'
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

export const SurubaParty = () => {
  const Strong: FCC = ({ children }) => (
    <StrongModifier color="text-highlight">{children}</StrongModifier>
  )

  return (
    <div>
      <h2 className="mb-4 h2-as-h1">
        Festa de <span className="text-highlight">gente pelada</span>
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
          Leia.
        </p>
        {/* <div>
          <Strong>Dados da festa</Strong>
          <KeyValue
            keyValue={[
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
                value: '20h às 8h - na madrugada (a vitrola rolando um blues)',
              },
              { key: 'Valor', value: 'Ainda não sabemos, em torno de R$100*' },
              {
                key: 'Lotação',
                value: 'de 25 a 30 pessoas — avaliadas com cuidado!',
              },
            ]}
          />
          <p className="mt-4 text-xs">
            * Se você não puder ir exclusivamente por causa da grana, se
            inscreva mesmo assim e cite isso quando eu te contatar. Existem
            algumas vagas patrocinadas
          </p>
        </div> */}
      </div>

      <H2>
        Suruba <span className="text-highlight">não é</span> bagunça
      </H2>
      <H3>Quem sou eu na fila do pão</H3>
      <p>
        Já <Strong>participei</Strong> e <Strong>organizei</Strong> ±10 festas
        de gente pelada.
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
      <UL>
        <LI>
          Uma festa na casa de uma colega com pizza, cerveja e{' '}
          <Strong>conversas sobre política</Strong> e música
        </LI>
        <LI>
          Um fim de semana no sítio com <Strong>jogo de STOP</Strong>, chá de
          camomila e fogueira (estava 1°C)
        </LI>
        <LI>
          Doze horas em num motel com piscina, pole dance,{' '}
          <Strong>jacuzzi</Strong> e banquete vegan.
        </LI>
      </UL>
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
        "pessoas físicas", e sempre sou amparado por um grupo de pessoas — em
        sua maioria mulheres — antes, durante e depois da festa.
      </p>

      <H3>
        Diálogo é <Strong>essencial</Strong>
      </H3>
      <p>
        As festas são feitas por e para pessoas <Strong>não-monogâmicas</Strong>{' '}
        e <Strong>queer</Strong>. Pessoas monogâmicas e/ou hétero podem
        participar? Claro, mas saibam que estarão em um espaço em que as pessoas
        ficam umas com as outras sem essas amarras. Se alguém fizer algum avanço
        (com respeito) e você não quiser participar, só{' '}
        <Strong>diga não</Strong> e siga se divertindo 😀
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

      {/* <p>
        <Link href="https://wa.me/491734967344">Vem de zap!</Link>
      </p> */}

      <p>
        Não tenho nenhuma festa agendada neste momento, mas siga meu{' '}
        <Link href="https://instagram.com/oicronofobico">Instagram</Link> para
        novidades 👌
      </p>
    </div>
  )
}
