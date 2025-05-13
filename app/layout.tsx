import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tammy\'s Calculator',
  description: 'You know exactly what this is.',
  generator: 'AAAAAAAAAAAAAAAAAAAA',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
