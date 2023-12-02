import { Inter } from 'next/font/google'
import './globals.css'
import { BottomBar, SideBar } from './components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Uniflow',
  description: 'Next generation expense tracker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex md:flex-row sm:flex-col' >
          <SideBar />
          <BottomBar/>
          {children}
        </main>
      </body>
    </html>
  )
}
