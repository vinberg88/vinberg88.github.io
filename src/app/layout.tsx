import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'WSL Guide - Complete Windows Subsystem for Linux Resource',
  description: 'Comprehensive guide to Windows Subsystem for Linux (WSL) including installation, configuration, development workflows, and best practices.',
  keywords: 'WSL, Windows Subsystem for Linux, Ubuntu, Linux, Windows, Development, Programming',
  authors: [{ name: 'WSL Guide Team' }],
  openGraph: {
    title: 'WSL Guide - Complete Windows Subsystem for Linux Resource',
    description: 'Comprehensive guide to Windows Subsystem for Linux (WSL)',
    type: 'website',
    url: 'https://vinberg88.github.io',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WSL Guide - Complete Windows Subsystem for Linux Resource',
    description: 'Comprehensive guide to Windows Subsystem for Linux (WSL)',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}