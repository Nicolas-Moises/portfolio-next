import { Header } from '@/components/ui/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden scroll-smooth bg-black text-zinc-100`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
