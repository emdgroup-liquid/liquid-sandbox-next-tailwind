import { useEffect } from 'react'

import 'tailwindcss/tailwind.css'
import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
