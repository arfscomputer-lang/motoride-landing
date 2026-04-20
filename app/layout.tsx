import type { Metadata, Viewport } from 'next'
import { Exo_2, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const exo2 = Exo_2({ subsets: ["latin"], variable: '--font-exo2', weight: ['300', '400', '500', '600'] })
const orbitron = Orbitron({ subsets: ["latin"], variable: '--font-orbitron', weight: ['400', '600', '700', '900'] })

export const metadata: Metadata = {
  title: 'MotoRide – La App de MotoTaxi para los Valles del Tuy',
  description: 'La revolución del transporte en los Valles del Tuy. Rápido, seguro y confiable.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  themeColor: '#00D4FF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${exo2.variable} ${orbitron.variable}`} style={{ backgroundColor: '#04060F' }}>
      <body className="antialiased overflow-x-hidden" style={{ color: '#F0F4FF' }}>
        {children}
        <Toaster />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
