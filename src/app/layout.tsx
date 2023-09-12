import { DarkModeProvider } from '@/contexts/DarkMode'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SearchProvider } from '@/contexts/SearchContext'
import { useContext } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Country-website',
  description: 'created by Daniel Santana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkModeProvider>
          <SearchProvider>
            {children}
          </SearchProvider>
        </DarkModeProvider>
      </body>
    </html>
  )
}
