import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata = {
  title: 'Example MDX',
  description: 'Nextjsでmarkdownを扱うサンプルアプリケーション',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  )
}
