import { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyle } from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tech Day</title>
        <link href="favicon.webp" type="image/webp" />
        <meta
          name="description"
          content="A simple project starter to work with Typscript, ReactJS, NextJS and Styled Component"
        />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
