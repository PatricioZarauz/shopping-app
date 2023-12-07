import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast';
import { RiInformationFill } from 'react-icons/ri';

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
          position="bottom-right"
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
            },
            blank: {
              icon: <RiInformationFill size={25} color="#0891B2" />,
              style: {
                borderColor: '#0891B2',
                borderWidth: 3
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