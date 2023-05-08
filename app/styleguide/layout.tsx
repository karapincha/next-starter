import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full border-b bg-white/95 shadow-sm backdrop-blur">
          <div className="container flex h-14 items-center gap-6">
            <Link href="/styleguide">
              <span className="font-bold">Styleguide</span>
            </Link>

            <Link href="/">
              <span className="text-sm font-medium">Home</span>
            </Link>
          </div>
        </nav>

        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-6 md:sticky md:block lg:py-8">
            <div className="flex flex-col gap-4">
              <Link href="/styleguide">
                <span>Introduction</span>
              </Link>
              <Link href="/styleguide/logo">
                <span>Logo</span>
              </Link>
              <Link href="/styleguide/colors">
                <span>Colors</span>
              </Link>
              <Link href="/styleguide/typography">
                <span>Typography</span>
              </Link>
              <Link href="/styleguide/icons">
                <span>Icons</span>
              </Link>
            </div>
          </aside>

          {children}
        </div>
      </body>
    </html>
  )
}
