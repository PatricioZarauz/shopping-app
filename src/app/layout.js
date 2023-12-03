import { Poppins } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600']
})

export const metadata = {
  title: 'Shopping App',
  description: 'Created by Patricio Zarauz for VGV',
}

const RootLayout = ({ children }) => {
  return (
    <html className={poppins.className} lang="en" data-theme="emerald">
      <body>
        <NavBar>
          {children}
        </NavBar>
      </body>
    </html>
  )
};

export default RootLayout;