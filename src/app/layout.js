import './globals.css'
import Header from '@/components/Header'
import { Shrikhand } from 'next/font/google'

const shrikhand = Shrikhand({ 
  subsets: ['latin'],
  weight: ['400']
 })

export const metadata = {
  title: 'MyMenu',
  description: 'Crie o seu cardapio da semana',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={shrikhand.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
