import Footer from '@/components/Footer/Footer'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
