/* eslint-disable */

import ToastProvider from '@/components/providers/toast-provider'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'

const roboto = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Jack Najarro | Desarrollador de software',
  description: 'Desarrollador de software con experiencia en el desarrollo de aplicaciones web y móviles.'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <ToastProvider/>
        {children}
      </body>
    </html>
  )
}
