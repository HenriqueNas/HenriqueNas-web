import TopBar from '@/components/TopBar'
import { ReactNode } from 'react'
import '../styles/global.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col h-screen">
        <TopBar />
        {children}
      </body>
    </html>
  )
}
