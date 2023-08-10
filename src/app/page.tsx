'use client'

// This is a client side React component.
// We use Liquid Oxygen Web Components with React bindings here.
// See https://liquid.merck.design/liquid/guides/server-side-rendering/#react-server-components

import Form from '../components/Form/Form'
import {
  LdBgCells,
  LdNotification,
  LdTypo,
} from '@emdgroup-liquid/liquid/dist/react-define-excluded'
import type { NextPage } from 'next'
import * as React from 'react'
import { useLiquid } from '../utils/liquid'

const successMessages = [
  'Nice! 👍',
  'Aaaweeesome! 🙌',
  'Rock on! 🤘',
  'How cool is that?! 😎',
  'Rad! 🤓',
  'Supersonic! ⚡️',
  'Magic! ✨',
  'Groovy baby! 🕺',
  'Lovely! 🥰',
  'Smooth! 💆‍♀️',
  'Mind-blowing! 🤯️',
  'Excellent! 👌️',
  'Delicious! 🤤️',
  'Outa space! 👽',
]

const Home: NextPage = () => {
  useLiquid()

  const [currentTheme, setCurrentTheme] = React.useState<string>('ocean')
  const handleChangeTheme = React.useCallback(
    (theme: string) => {
      document.body.classList.remove(`ld-theme-${currentTheme}`)
      setCurrentTheme(theme)
      document.body.classList.add(`ld-theme-${theme}`)
      setTimeout(() => {
        const content = successMessages.shift()
        dispatchEvent(new CustomEvent('ldNotificationClear'))
        dispatchEvent(
          new CustomEvent('ldNotificationAdd', {
            detail: {
              content: content,
              type: 'info',
              timeout: 2000,
            },
          })
        )
        successMessages.push(content!)
      }, 500)
    },
    [currentTheme]
  )

  return (
    <>
      <LdNotification placement="bottom" />
      <LdBgCells className="block absolute inset-0" />
      <div className="container px-ld-24 pt-ld-40 pb-24 relative max-w-2xl mx-auto">
        <LdTypo variant="b1" className="text-thm-warning mb-ld-40">
          Liquid Sandbox App
        </LdTypo>
        <Form onChangeTheme={handleChangeTheme} />
      </div>
    </>
  )
}

export default Home
