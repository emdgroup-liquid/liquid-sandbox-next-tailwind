import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'
import { type NextComponentType } from 'next'
import {
  type AppContextType,
  type AppPropsType,
} from 'next/dist/shared/lib/utils'
import 'tailwindcss/tailwind.css'
import { AppContext } from 'next/app'

void (async () => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.__LD_ASSET_PATH__ = window.location.origin + '/liquid/'
    const { defineCustomElements } = await import(
      '@emdgroup-liquid/liquid/dist/loader'
    )
    void defineCustomElements()
  }
})()

const MyApp: NextComponentType<
  AppContextType,
  object,
  AppPropsType<never> & AppContext
> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
