import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Providers } from '#components/templates/Providers/Providers'
import 'highlight.js/styles/base16/tomorrow-night.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers {...pageProps}>
      <FirstHead />
      <Component {...pageProps} />
    </Providers>
  )
}

function FirstHead() {
  return (
    <Head>
      {/* AVOID CHANGING IN STYLE */}
      <meta name="color-scheme" content="light only" />
      <meta name="color-scheme" content="only" />

      {/* FONTS */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      {/* FAVICON */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
      <link rel="manifest" href="/manifest.webmanifest" />
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
        key="og:image"
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
        key="twitter:image"
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

export default MyApp
