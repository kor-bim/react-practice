import '@/app/globals.css'
import { Providers } from '@/app/providers'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TODO',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning dir="ltr" lang="ko">
      <body>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>{children}</Providers>
      </body>
    </html>
  )
}
