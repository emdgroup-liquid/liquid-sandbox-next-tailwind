import '@emdgroup-liquid/liquid/dist/css/liquid.global.css'
import 'tailwindcss/tailwind.css'
import Footer from '../components/Footer/Footer'
import * as React from 'react'

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ visibility: 'hidden' }}>
        <div
          style={{ minWidth: '20rem' }}
          className="flex flex-col min-h-screen"
        >
          <main
            className="relative flex items-center"
            style={{ minHeight: '80vh' }}
          >
            {props.children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
