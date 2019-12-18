import React from 'react';
import styled from 'styled-components';
import Mailchimp from 'react-mailchimp-form';
import size from '../components/breakpoints';
// import PropTypes from 'prop-types';

import Page from '../templates/page';

const Disclaimer = styled.div`
  background-color: #e6e6e6;
  padding: 10px;
  max-width: 600px;
  margin: 50px 0;
  p {
    display: block;
    padding: 0;
    margin: 0;
    font-size: 0.95em;
    line-height: 1.5em;
  }
  h3 {
    margin-bottom: 10px;
    font-weight: 500;
  }
`;

const Form = styled(Mailchimp)`
  margin: 50px 0;
  display: grid;
  grid-template-areas:
    'email name lname button'
    'message message message message';
  grid-gap: 10px;
  @media ${size.small} {
    grid-template-areas:
      'email email'
      'name lname'
      'button button'
      'message message';
  }
  @media ${size.small} {
    grid-template-areas:
      'email'
      'name'
      'lname'
      'button'
      'message';
  }

  input {
    padding: 10px 15px;
    border: 2px solid ${p => p.theme.color.black};
  }

  input[name='EMAIL'] {
    grid-area: email;
  }
  input[name='FNAME'] {
    grid-area: name;
  }
  input[name='LNAME'] {
    grid-area: lname;
  }
  button {
    grid-area: button;

    box-sizing: border-box;
    transition: all 0.2s;
    appearance: none;
    font-size: 1.3em;
    text-align: center;
    cursor: pointer;
    border: 2px solid ${p => p.theme.color.black};
    background-color: ${p => p.theme.color.white};
    color: ${p => p.theme.color.black};
    width: 100%;
    padding: 10px 20px;
    &:hover {
      transform: translate(5px, -5px);
    }
  }

  .msg-alert {
    grid-area: message;
    p {
      text-align: center;
      margin: 0;
      color: ${p => p.theme.color.black} !important;
    }
  }
`;

const Newsletter = () => {
  return (
    <Page
      type="newsletter"
      pageContext={{ type: 'singlepage' }}
      data={{
        pageInfo: {
          frontmatter: {
            title: 'Newsletter',
            live: null,
          },
          excerpt: null,
          html: null,
        },
      }}
      path="/"
    >
      <h1>Bora, galera!</h1>
      <Disclaimer>
        <h3>Disclaimer</h3>
        <p>Unfortunately, my newsletter is available only in Brazilian Portuguese.</p>
        <p>
          Want an english version?
          <a href="mailto:angelodias[at]angelodias.com.br">E-mail me</a>
        </p>
      </Disclaimer>
      <p>
        Antes de tudo: inscreva-se minha newsletter colocando seu belo e-mail e magnífico nome no
        formulário abaixo
      </p>

      <Form
        action="https://cronofobia.us18.list-manage.com/subscribe/post?u=7f7f7bf590f89ed09718581fc&amp;id=a751d85ac9"
        // Adding multiple fields:
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'e-mail',
            type: 'email',
            required: true,
          },
          {
            name: 'FNAME',
            placeholder: 'nome',
            type: 'text',
            required: true,
          },
          {
            name: 'LNAME',
            placeholder: 'sobrenome',
            type: 'text',
            required: true,
          },
        ]}
        // Change predetermined language
        messages={{
          sending: 'Enviando...',
          success: 'Obrigado por assinar!',
          error: 'Ih, deu alguma zica no servidor. Será que você já se inscreveu? Tente de novo.',
          empty: 'Tem algum campo vazio ou errado, não tem?',
          duplicate: 'Tentaram assinar vezes demais com esse email',
          button: 'bora!',
        }}
        // Add a personalized class
        className="mcform"
      />

      <h2>O que esperar dessa newsletter?</h2>
      <p>De verdade? Nada.</p>
      <p>
        A ideia é compartilhar meus projetos em andamento e falar um pouco sobre processos e outras
        questões.
      </p>
      <p>Não sei bem quando vou atualizá-la nem como vai ser o formato.</p>
      <p>
        A parte boa: não vai ter spam na sua caixa de entrada nem um milhão de e-mails por semana.
      </p>
      <p>
        <b>POR FAVOR:</b> sugestões, críticas ou elogios?{' '}
        <a href="mailto:angelodias[at]angelodias.com.br">Manda aquele email show!</a>
      </p>
    </Page>
  );
};

export default Newsletter;
