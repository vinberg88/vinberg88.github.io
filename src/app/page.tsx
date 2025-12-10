import Image from 'next/image'
import Link from 'next/link'

const quickStart = [
  {
    title: 'Install WSL the smart way',
    description:
      'Enable the Windows features you need, download the latest kernel, and choose a distro that matches your workflow.',
    href: '/installation/',
    action: 'Installation guide'
  },
  {
    title: 'Tune your Linux + Windows bridge',
    description:
      'Craft a .wslconfig, optimize file placement, and wire up Windows Terminal, VS Code, and your dev tools.',
    href: '/configuration/',
    action: 'Configuration playbook'
  },
  {
    title: 'Build production-ready stacks',
    description:
      'Run Node.js, containers, AI workloads, and enterprise workflows with reproducible environments and governance.',
    href: '/development/',
    action: 'Development recipes'
  }
]

const heroStats = [
  { label: 'Distros covered', value: '8+' },
  { label: 'Automation snippets', value: '40+' },
  { label: 'Enterprise guardrails', value: '12' }
]

const featurePillars = [
  {
    title: 'Linux fidelity, Windows comfort',
    points: [
      'Run the Microsoft-maintained Linux kernel with near-native performance and full system call compatibility.',
      'Mix Windows productivity apps with Linux shells, dotfiles, and package managers without leaving your terminal.'
    ]
  },
  {
    title: 'Operational excellence built-in',
    points: [
      'Snap, export, and restore distros with scriptable workflows for onboarding and disaster recovery.',
      'Control CPU, memory, networking, and disk usage from a single .wslconfig that scales from laptops to enterprise fleets.'
    ]
  },
  {
    title: 'Modern workloads unlocked',
    points: [
      'Ship microservices, AI experiments, and GPU-accelerated notebooks with the same toolchains you use in production.',
      'Integrate Docker, Dev Containers, GitHub Actions runners, and cloud CLIs directly inside your WSL distro.'
    ]
  }
]

const spotlightRoutes = [
  {
    name: 'WSL Deep Dive',
    href: '/wsl/',
    summary:
      'Architectural insights, distro management checklists, and automation patterns for serious WSL practitioners.'
  },
  {
    name: 'WSL Enterprise Playbook',
    href: '/wsl-pro/',
    summary:
      'Governance controls, compliance frameworks, and rollout strategies for large organizations adopting WSL.'
  },
  {
    name: 'Node.js on WSL',
    href: '/node/',
    summary:
      'Install, version, and debug Node.js projects with speed using nvm, fnm, or asdf right inside your distro.'
  }
]

const terminalOnboarding = [
  {
    prompt: 'PS C:\\>',
    command: 'wsl --install -d Ubuntu-24.04'
  },
  {
    prompt: 'PS C:\\>',
    command: 'wsl --set-default-version 2'
  },
  {
    prompt: 'PS C:\\>',
    command: 'wsl --export Ubuntu-24.04 \\Backups\\ubuntu-base.tar'
  },
  {
    prompt: 'user@wsl:~$',
    command: 'sudo apt update && sudo apt install build-essential git curl'
  }
]

const updateHighlights = [
  {
    title: 'GPU workflows checklist',
    description: 'Step-by-step for configuring CUDA, DirectML, and ROCm inside WSL with IDE support.',
    href: '/wsl/#graphics-ai-and-data'
  },
  {
    title: 'Enterprise automation packs',
    description: 'Reusable scripts that export, rotate, and validate distros at scale for regulated industries.',
    href: '/wsl-pro/#automation-playbooks'
  },
  {
    title: 'Dev Container blueprints',
    description: 'Prebuilt templates that keep WSL, Docker, and VS Code remote development in sync.',
    href: '/development/#dev-containers'
  }
]

const creatorHighlights = [
  'Bygger WSL-upplevelser med fokus på design, automation och hållbara flöden.',
  'Mixar openSUSE-inspirerade desktops med Windows för en sömlös hybridmiljö.',
  'Delar guider, skript och inspiration tillsammans med WSL-communityt.'
]

export default function HomePage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" aria-hidden="true">
          <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-32 left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                WSL Guide · Mission Control
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
                Build, manage, and scale Windows Subsystem for Linux without guesswork
              </h1>
              <p className="mt-6 text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-2xl">
                From your first distro install to enterprise governance, this guide bundles field-tested workflows,
                automation scripts, and deep dives so your Linux-on-Windows experience feels effortless.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/installation/"
                  className="bg-white text-sky-700 px-6 py-3 rounded-lg font-semibold shadow-lg shadow-black/10 hover:bg-blue-50 transition-colors"
                >
                  Start with Installation
                </Link>
                <Link
                  href="/wsl/"
                  className="border-2 border-white/70 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-700 transition-colors"
                >
                  Explore the Deep Dive
                </Link>
              </div>
              <dl className="mt-10 grid grid-cols-3 gap-4 text-left">
                {heroStats.map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/15 backdrop-blur px-4 py-3 border border-white/20">
                    <dt className="text-sm uppercase tracking-wide text-blue-100/80">{item.label}</dt>
                    <dd className="text-2xl font-semibold">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl bg-gray-900/80 backdrop-blur border border-white/15 shadow-2xl shadow-black/30 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-emerald-300 to-blue-400" />
                <div className="px-6 pt-6 pb-3">
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span className="font-semibold text-white/80">WSL Control Room</span>
                    <span>Guided onboarding</span>
                  </div>
                  <div className="mt-5 space-y-2 font-mono text-sm text-white/85">
                    {terminalOnboarding.map((entry) => (
                      <div key={entry.command}>
                        <span className="text-emerald-300">{entry.prompt}</span>
                        <span className="text-white ml-2">{entry.command}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6 pt-4 bg-gray-900/70 border-t border-white/10">
                  <p className="text-sm text-white/75 leading-relaxed">
                    Need a faster start? Clone our
                    {' '}
                    <a
                      href="https://github.com/vinberg88/vinberg88.github.io/tree/main/scripts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-200 underline-offset-4 hover:underline"
                    >
                      automation scripts
                    </a>
                    {' '}
                    to bootstrap distros, secrets, and dotfiles in one go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Choose your next move</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Whether you are just enabling WSL or running enterprise fleets, these curated paths keep you moving forward
              without babysitting documentation across the web.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {quickStart.map((item) => (
              <div
                key={item.title}
                className="card h-full bg-white/80 dark:bg-gray-900/70 border border-gray-100 dark:border-gray-800 flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                </div>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 dark:text-sky-300 dark:hover:text-sky-200 font-semibold"
                >
                  {item.action}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/60 dark:bg-gray-950/50 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Why teams adopt WSL</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                We bake battle-tested practices straight into the guide so you can focus on building. No more guessing
                when to stay on Windows, when to switch to Linux, or how to keep compliance happy.
              </p>
              <div className="mt-8 space-y-6">
                {featurePillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{pillar.title}</h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                      {pillar.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="ml-3 text-gray-300 text-xs">automation.ps1</span>
                </div>
                <div className="terminal-content text-sm space-y-2">
                  <code className="text-white"># Convert your distro fleet to WSL 2</code>
                  <code className="text-emerald-300">
                    wsl -l -q | ForEach-Object{' '}
                    {'{'} wsl --set-version $_ 2 {'}'}
                  </code>
                  <code className="text-white"># Apply your org .wslconfig everywhere</code>
                  <code className="text-emerald-300">Copy-Item .wslconfig $env:USERPROFILE\\.wslconfig</code>
                  <code className="text-white"># Snapshot for rollback</code>
                  <code className="text-emerald-300">wsl --export Ubuntu-24.04 backups\\ubuntu-$(Get-Date -Format yyyyMMdd).tar</code>
                </div>
              </div>
              <div className="card bg-gradient-to-br from-indigo-600/20 via-blue-600/20 to-emerald-500/20 border border-indigo-500/20">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Operate with confidence</h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  Jump into the enterprise playbook for rollout phases, compliance controls, and health dashboards that
                  make your security team smile.
                </p>
                <Link
                  href="/wsl-pro/"
                  className="mt-4 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-300 font-semibold hover:underline"
                >
                  Visit the playbook
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Spotlight guides</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Dive into purpose-built guides that cover everything from daily workflows to regulated deployments and
              language-specific tooling.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {spotlightRoutes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className="card bg-white hover:shadow-xl transition-shadow duration-200 dark:bg-gray-900/70 border border-gray-100 dark:border-gray-800 flex flex-col"
              >
                <span className="text-sm uppercase tracking-wide text-sky-600 dark:text-sky-300">Featured</span>
                <h3 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-gray-100">{route.name}</h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">{route.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sky-600 dark:text-sky-300 font-semibold">
                  Read the guide
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-sky-900 to-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] items-center bg-white/10 dark:bg-white/5 border border-white/20 rounded-3xl shadow-xl shadow-black/20 overflow-hidden">
            <div className="relative h-full bg-slate-900/70 p-6 flex items-center justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-white/40 shadow-2xl shadow-black/40">
                <Image
                  src="/profile.jpg"
                  alt="Mattias Vinberg"
                  fill
                  sizes="(min-width: 1024px) 220px, 180px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-3xl pointer-events-none" aria-hidden="true">
                <div className="absolute -inset-6 bg-gradient-to-br from-emerald-400/20 via-sky-400/15 to-indigo-500/20 blur-3xl" />
              </div>
            </div>
            <div className="p-8 sm:p-10 text-white">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-emerald-200/80">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Creator spotlight
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight">Mattias Vinberg</h2>
              <p className="mt-4 text-base sm:text-lg text-slate-100/85 leading-relaxed">
                Hej! Jag bygger och kuraterar WSL Guide för att göra Linux på Windows tillgängligt för alla – från nyfikna utvecklare till stora team.
              </p>
              <ul className="mt-6 space-y-3 text-sm sm:text-base text-slate-100/80">
                {creatorHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <svg className="mt-1 h-4 w-4 text-emerald-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414L8.5 11.086l6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
                <a
                  href="https://github.com/vinberg88/opensuse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex w-full max-w-xl items-center gap-5 rounded-2xl border border-white/25 bg-white/10 px-5 py-4 backdrop-blur transition hover:border-emerald-200/70 hover:bg-emerald-400/15"
                >
                  <div className="relative h-16 w-28 overflow-hidden rounded-xl border border-white/20 bg-slate-900/60">
                    <Image
                      src="/opensuse-desktop.png"
                      alt="openSUSE-desktop i WSL"
                      fill
                      sizes="(min-width: 768px) 112px, 112px"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-[0.22em] text-emerald-200/80">WSL - Desktop for All</p>
                    <p className="mt-1 text-sm text-slate-100/85">
                      Utforska openSUSE-inspirerade skrivbord för en komplett WSL-upplevelse på Windows.
                    </p>
                  </div>
                  <svg className="h-4 w-4 shrink-0 text-emerald-200 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <p className="text-xs text-slate-100/70">
                  Följ projektet på GitHub och bidra med dina egna desktop-idéer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100/70 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Fresh updates</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              The guide evolves with each WSL release. Catch the latest patterns, scripts, and integrations we have added
              this quarter.
            </p>
          </div>
          <div className="md:col-span-3 grid gap-6">
            {updateHighlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-xl bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 p-6 hover:border-sky-500/60 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sky-600 dark:text-sky-300 font-semibold">
                  Open section
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Ready to ship with confidence?</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Browse the full site map below or jump straight into the contact page if you have a scenario we should cover next.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            {[
              { label: 'WSL Deep Dive', href: '/wsl/' },
              { label: 'Enterprise Playbook', href: '/wsl-pro/' },
              { label: 'Troubleshooting', href: '/troubleshooting/' },
              { label: 'Tools & Apps', href: '/tools/' },
              { label: 'Resources', href: '/resources/' },
              { label: 'Contact', href: '/contact/' }
            ].map((chip) => (
              <Link
                key={chip.href}
                href={chip.href}
                className="nav-link bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800"
              >
                {chip.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}