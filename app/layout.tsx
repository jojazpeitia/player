import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ee oh',
  description: 'ohhhh',
  viewport: 'width=512, initial-scale=0.8'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='overflow-hidden '>
      <body className={`${inter.className} overflow-hidden relative`}>
        {children}
        </body>
    </html>
  )
}
