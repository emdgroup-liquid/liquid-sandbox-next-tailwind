import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'

;(async () => {
  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.__LD_ASSET_PATH__ = window.location.origin + '/liquid/'
    const { defineCustomElements } = await import(
      '@emdgroup-liquid/liquid/dist/loader'
    )
    defineCustomElements()
  }
})()

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
