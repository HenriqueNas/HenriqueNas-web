import TopBar from '@/components/TopBar'
import { ReactNode } from 'react'
import '../styles/global.css'

import background from '../assets/background.png'
import { mystery } from '@/styles/fonts/mystery'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`flex flex-col h-screen bg-purple-200 ${mystery.className} text-2xl`}
        style={{
          background: `url(${background.src})`,
        }}
      >
        <TopBar />
        {children}
      </body>
    </html>
  )
}
