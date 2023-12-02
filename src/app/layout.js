import { Poppins } from 'next/font/google'
import './globals.css'

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
    <html className={poppins.className} lang="en">
      <body>{children}</body>
    </html>
  )
};

export default RootLayout;