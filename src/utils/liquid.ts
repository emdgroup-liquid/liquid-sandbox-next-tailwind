import { useEffect } from 'react'

export function initLiquid() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.__LD_ASSET_PATH__ = window.location.origin + '/liquid/'
  return import('@emdgroup-liquid/liquid/dist/loader').then((module) => {
    module.defineCustomElements()
    document.body.style.visibility = 'unset'
  })
}

export function useLiquid() {
  useEffect(() => {
    void initLiquid()
  }, [])
}
