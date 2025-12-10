import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

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
      <head>
        {/* Prevent theme flash before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const storageKey = 'wsl-guide-theme';
    const theme = localStorage.getItem(storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolved = theme === 'system' || !theme ? (prefersDark ? 'dark' : 'light') : theme;
    const root = document.documentElement;
    root.classList.remove('light','dark');
    root.classList.add(resolved);
  } catch {}
})();`,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}