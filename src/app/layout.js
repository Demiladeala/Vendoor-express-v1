import './globals.css'

export const metadata = {
  title: 'Vendoor express',
  description: 'Find Vendors for every product and services you need around you',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
