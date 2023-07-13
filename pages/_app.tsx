import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'
import { type NextComponentType } from 'next'
import type { AppProps } from 'next/app'
import {
  type AppContextType,
  type AppPropsType,
} from 'next/dist/shared/lib/utils'
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

const MyApp: NextComponentType<
  AppContextType,
  object,
  AppPropsType<any, object>
> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
