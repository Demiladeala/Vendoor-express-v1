import Footer from '@/app/Footer'
import './globals.css'
import Header from '@/app/Header'

export const metadata = {
  title: 'Vendoor express',
  description: 'Find Vendors for every product and services you need around you',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
