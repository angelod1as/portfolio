import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import GlobalStyle from '@styles/GlobalStyle'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FirstHead />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

function FirstHead() {
  return (
    <Head>
      {/* FONTS */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,700;1,700&family=Montserrat:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&display=swap"
        rel="stylesheet"
      />
      {/* META */}
      {/* Primary Meta Tags */}
      <title key="title">I'm Angelo and I do stuff</title>
      <meta name="title" key="meta-title" content="I'm Angelo and I do stuff" />
      <meta
        name="description"
        key="meta-description"
        content="Coding, design, writing & much more at this portfolio website"
      />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://angelodias.com.br" />
      <meta
        property="og:title"
        key="og:title"
        content="I'm Angelo and I do stuff"
      />
      <meta
        property="og:description"
        key="og:description"
        content="Coding, design, writing & much more at this portfolio website"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/angelodias/image/upload/v1608995567/portfolio/tiles/social_xlptmf.png"
      />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://angelodias.com.br" />
      <meta
        property="twitter:title"
        key="tw:title"
        content="I'm Angelo and I do stuff"
      />
      <meta
        property="twitter:description"
        key="tw:description"
        content="Coding, design, writing & much more at this portfolio website"
      />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/angelodias/image/upload/v1608995567/portfolio/tiles/social_xlptmf.png"
      />
      <meta
        name="keywords"
        content="portfolio, coding, writing, design, programming, angelo, dias, react, node, javascript, typescript"
      />
      <meta name="author" content="Angelo Dias <oiangelodias@gmail.com>" />
      <meta name="url" content="https://angelodias.com.br" />
    </Head>
  )
}

export default App
