import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/Navbar'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import ModalProvider from '@/providers/modal-provider'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-commerce Store',
  description: 'Developed by Garen Pham',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={urbanist.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
