import { Inter } from 'next/font/google'
import './globals.css'
import { BottomBar, SideBar } from './components'
import { UniflowLogo } from './assets/icons'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Uniflow',
  description: 'Next generation expense tracker',
  icons: {
    icon: '/icon.svg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex md:flex-row sm:flex-col' >
          <SideBar />
          <BottomBar />
          {children}
        </main>
      </body>
    </html>
  )
}
