import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast';

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
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            success: {
              style: {
                borderWidth: 3,
                borderColor: '#16a34a'
              },
              className: "alert"
            },
            error: {
              style: {
                borderWidth: 3,
                borderColor: '#dc2626'
              },
              className: "alert"
            }
          }}
        />
        {children}
      </body>
    </html>
  )
};

export default RootLayout;