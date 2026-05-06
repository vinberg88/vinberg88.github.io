import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
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
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
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
      <body>
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