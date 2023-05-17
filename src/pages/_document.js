import Analytics from '../components/Analytics'

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Analytics/>
      </body>
    </Html>
  )
}