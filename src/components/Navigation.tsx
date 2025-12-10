'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'

type NavigationItem = {
  name: string
  href: string
  icon: ReactNode
}

const iconClasses = 'w-4 h-4'

const navigation: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3.5 10.1 12 4l8.5 6.1" />
        <path d="M6 10.75v7.75A1.5 1.5 0 0 0 7.5 20h3.1v-4.5h2.8V20h3.1a1.5 1.5 0 0 0 1.5-1.5V10.75" />
      </svg>
    )
  },
  {
    name: 'WSL Deep Dive',
    href: '/wsl',
    icon: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x={3.5} y={5.5} width={17} height={13} rx={2.5} />
        <path d="M7.5 10.5 10.5 13l-3 2.5" />
        <path d="M12.75 15.75h3.75" />
      </svg>
    )
  },
  {
    name: 'Installation',
    href: '/installation',
    icon: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5.5v8.75" />
        <path d="M9.25 11 12 13.75 14.75 11" />
        <path d="M6 18.5h12" />
      </svg>
    )
  },
  {
    name: 'Configuration',
    href: '/configuration',
    icon: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7.5 7h9" />
        <path d="M5.5 12h13" />
        <path d="M9 17h6" />
        <circle cx={15.5} cy={7} r={1.6} />
        <circle cx={8.5} cy={12} r={1.6} />
        <circle cx={14} cy={17} r={1.6} />
      </svg>
    )
  },
  {
    name: 'Development',
    href: '/development',
    icon: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M8.5 8.5 5.5 12l3 3.5" />
        <path d="M15.5 8.5 18.5 12l-3 3.5" />
        <path d="M12 7l-1.5 10" />
      </svg>
    )
  },
  {
    name: 'Node.js',
    href: '/node',
    icon: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 4.5 19 8.5v7l-7 4-7-4v-7l7-4z" />
        <path d="M10 11.75h3.25a1.75 1.75 0 0 1 0 3.5H12.5" />
        <path d="M12 15.25v-3.5" />
      </svg>
    )
  },
  {
    name: 'Node.js (Legacy)',
    href: '/node-old',
    icon: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx={12} cy={12} r={6.5} />
        <path d="M12 8.75v3.25l2.25 1.5" />
        <path d="M9.25 6.75 7.5 5" />
        <path d="M14.75 6.75 16.5 5" />
      </svg>
    )
  },
  {
    name: 'Troubleshooting',
    href: '/troubleshooting',
    icon: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx={12} cy={12} r={6.5} />
        <path d="M12 8v2.75" />
        <path d="M12 13.5v.25" />
        <path d="M8.3 8.3 6.9 6.9" />
        <path d="M15.7 8.3 17.1 6.9" />
        <path d="M8.3 15.7 6.9 17.1" />
        <path d="M15.7 15.7 17.1 17.1" />
      </svg>
    )
  },
  {
    name: 'Best Practices',
    href: '/best-practices',
    icon: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 4.5 10.5 8l3.5.5-2.5 2.5.6 3.5L9 12.5l-3.1 2 .6-3.5L4 8.5l3.5-.5z" />
        <path d="M16.75 9.25 18 10.5 20.25 9.75 19.5 12 20.75 13.25 18.5 13.5 17.75 15.75 16.5 14.5 14.25 15.25 15 13 13.75 11.75 16 11.5z" />
      </svg>
    )
  },
  {
    name: 'WSL Enterprise Playbook',
    href: '/wsl-pro',
    icon: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6.5 19.5v-13l5.5-2 5.5 2v13" />
        <path d="M6.5 10.5h11" />
        <path d="M9.75 13.5h4.5" />
        <path d="M9.75 16.5h4.5" />
      </svg>
    )
  },
  {
    name: 'Tools & Apps',
    href: '/tools',
    icon: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12.25 4.75a3.5 3.5 0 0 1 3.5 3.5l-1.5 1.5 4.25 4.25a2 2 0 0 1-2.83 2.83L11.42 12.6l-1.5 1.5a3.5 3.5 0 1 1-4.95-4.95l3.9-3.9" />
      </svg>
    )
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6.5 6.5A3 3 0 0 1 9.5 4h8v16h-8a3 3 0 0 0-3 3v-16Z" />
        <path d="M6.5 6.5A3 3 0 0 1 9.5 4" />
        <path d="M6.5 18.5H17.5" />
      </svg>
    )
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: (
      <svg
        className={iconClasses}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x={4.5} y={6.5} width={15} height={11} rx={2} />
        <path d="m5.5 8.75 6.5 4.25 6.5-4.25" />
      </svg>
    )
  }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 supports-[backdrop-filter]:dark:bg-gray-900/80 shadow-lg sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-wsl-blue rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">WSL</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">WSL Guide</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1.5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${pathname === item.href ? 'active' : ''}`}
              >
                <span className="flex items-center gap-1.5">
                  <span className="shrink-0" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </span>
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:text-gray-900 dark:focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg ${
                  pathname === item.href
                    ? 'text-wsl-blue bg-blue-50 dark:bg-wsl-blue/10'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="shrink-0" aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}