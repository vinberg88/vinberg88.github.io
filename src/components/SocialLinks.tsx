import type { SVGProps } from 'react'

export type SocialLinksVariant = 'full' | 'minimal'
export type SocialLinksAppearance = 'light' | 'dark'

interface SocialLink {
  label: string
  href: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  primary?: boolean
}

const GitHubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.799 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const MicrosoftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M0 0v11.4L11.4 0H0zm12.6 0v11.4L24 0H12.6zM0 12.6V24h11.4L0 12.6zm12.6 11.4H24V12.6L12.6 24z" />
  </svg>
)

const YouTubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M23.498 6.186a3 3 0 00-2.116-2.116C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.382.57A2.999 2.999 0 00.502 6.186C0 8.08 0 12 0 12s0 3.92.502 5.814a3 3 0 002.116 2.116C4.5 20.5 12 20.5 12 20.5s7.5 0 9.382-.57a3 3 0 002.116-2.116C24 15.92 24 12 24 12s0-3.92-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
  </svg>
)

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.98 3.5C3.87 3.5 3 4.38 3 5.48c0 1.1.87 1.98 1.98 1.98 1.1 0 1.98-.88 1.98-1.98 0-1.1-.88-1.98-1.98-1.98zM3.5 8.5h3v12h-3v-12zM9.5 8.5h2.86v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v7.32h-3v-6.48c0-1.54-.03-3.52-2.14-3.52-2.15 0-2.48 1.68-2.48 3.42v6.58h-3v-12z" />
  </svg>
)

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.243 2H21l-6.507 7.455L22.5 22h-6.243l-4.777-6.338L5.867 22H3.11l6.936-7.95L1.5 2h6.243l4.315 5.727L18.243 2zm-2.2 18h1.8l-8.04-10.66L5 4H3.2l8.04 10.66L16.043 20z" />
  </svg>
)

const links: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/vinberg88/opensuse',
    icon: GitHubIcon,
    primary: true,
  },
  {
    label: 'Project GitHub',
    href: 'https://github.com/vinberg88/vinberg88.github.io',
    icon: GitHubIcon,
    primary: false,
  },
  {
    label: 'Microsoft Docs',
    href: 'https://docs.microsoft.com/en-us/windows/wsl/',
    icon: MicrosoftIcon,
    primary: false,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@mattiasvinberg',
    icon: YouTubeIcon,
    primary: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mattias-vinberg/',
    icon: LinkedInIcon,
    primary: true,
  },
  {
    label: 'Twitter',
    href: 'https://x.com/mattiasvinberg',
    icon: XIcon,
    primary: true,
  },
]

interface SocialLinksProps {
  appearance?: SocialLinksAppearance
  variant?: SocialLinksVariant
  className?: string
}

export default function SocialLinks({
  appearance = 'dark',
  variant = 'full',
  className = '',
}: SocialLinksProps) {
  const colorClasses =
    appearance === 'light'
      ? 'text-blue-100 hover:text-white focus-visible:outline-white/80'
      : 'text-gray-400 hover:text-white focus-visible:outline-wsl-blue'

  const filteredLinks = variant === 'minimal' ? links.filter((link) => link.primary) : links

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {filteredLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={`${colorClasses} transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
        >
          <link.icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  )
}
