import './globals.css'

export const metadata = {
  title: 'Manufacturing DX Lab',
  description: '製造業のためのDXソリューション',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
