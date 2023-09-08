import Footer from '@/components/Footer'
import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Vendoor express',
  description: 'Find Vendors for every product and services you need around you',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-body-bg-color'>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
