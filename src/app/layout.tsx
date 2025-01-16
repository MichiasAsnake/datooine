import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'MOONAR - AI for Tyre Solutions',
  description: 'MOONAR leverages AI technology to provide innovative solutions for the tyre industry, offering data analysis, anomaly detection, and market intelligence.',
  keywords: ['AI', 'Tyre Solutions', 'Machine Learning', 'Data Analysis', 'Anomaly Detection', 'Market Intelligence'],
  authors: [{ name: 'MOONAR' }],
  robots: 'index, follow',
  metadataBase: new URL('https://moonar.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moonar.vercel.app',
    siteName: 'MOONAR',
    title: 'MOONAR - AI for Tyre Solutions',
    description: 'Advanced AI solutions for the tyre industry',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MOONAR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MOONAR - AI for Tyre Solutions',
    description: 'Advanced AI solutions for the tyre industry',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
