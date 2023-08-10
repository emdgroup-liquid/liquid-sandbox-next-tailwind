import { JSX as LocalJSX } from '@emdgroup-liquid/liquid/dist/loader'
import { HTMLAttributes } from 'react'

type LiquidElements<T> = {
  [P in keyof T]?: T[P] &
    Omit<HTMLAttributes<never>, 'className'> & {
      class?: string
    }
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements
      extends LiquidElements<LocalJSX.IntrinsicElements> {}
  }

  // Required only when using __LD_ASSET_PATH__
  interface Window {
    __LD_ASSET_PATH__?: string
  }
}
