import './globals.css'

import { Hanken_Grotesk } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ReactNode } from 'react'

const HankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Felipe P Eduardo',
  description: 'Felipe Portfólio',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR" className={HankenGrotesk.className} >
      <body className='bg-purpleDark-900 text-gray-100'>
        <div className='relative h-screen flex flex-col'>
          <Header />  
                  
          <main className='max-w-5xl px-8 py-24 mx-auto flex items-center flex-1'>
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  )
}
