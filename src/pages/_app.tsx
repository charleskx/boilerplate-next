import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate NextJS</title>

        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="description"
          content="A simple projectstarter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
