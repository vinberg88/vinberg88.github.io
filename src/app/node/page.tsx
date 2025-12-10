import Link from 'next/link'

const prerequisites = [
  {
    title: 'Verify WSL Distro',
    description: 'Confirm that your Linux distribution is running with WSL 2 for best Node.js performance.',
    command: 'wsl -l -v'
  },
  {
    title: 'Update Packages',
    description: 'Refresh the package index and upgrade existing packages inside your distro.',
    command: 'sudo apt update && sudo apt upgrade'
  },
  {
    title: 'Install Build Essentials',
    description: 'Install required build tooling so native node modules compile correctly.',
    command: 'sudo apt install build-essential curl file git'
  },
]

const managers = [
  {
    name: 'nvm',
    description: 'The most popular Node.js version manager. Great when you need to switch between LTS releases.',
    install: 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash',
    usage: ['nvm install --lts', 'nvm use --lts', 'nvm install 22.11.0']
  },
  {
    name: 'fnm',
    description: 'Fast Node Manager written in Rust. Excellent performance with minimal shell init cost.',
    install: 'curl -fsSL https://fnm.vercel.app/install | bash',
    usage: ['fnm env --use-on-cd >> ~/.bashrc', 'fnm install latest', 'fnm use 20']
  },
  {
    name: 'asdf',
    description: 'Polyglot version manager that can handle Node.js plus other runtimes from a single tool.',
    install: 'asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git',
    usage: ['asdf install nodejs latest', 'asdf global nodejs 20.12.2']
  }
]

const tooling = [
  {
    title: 'Package Managers',
    points: [
      'npm ships with Node.js—great for simple scripts and smaller projects.',
      'pnpm uses content-addressable storage for faster installs across repos.',
      'Yarn 4 (Berry) improves monorepo workflows and zero-install environments.'
    ]
  },
  {
    title: 'Task Automation',
    points: [
      'Use npm scripts for lightweight automation directly in package.json.',
      'Adopt turbo, Nx, or just-task if you orchestrate multi-package workspaces.',
      'Leverage VS Code tasks.json for shared dev/CI tasks accessible from the command palette.'
    ]
  },
  {
    title: 'Testing & Linting',
    points: [
      'Vitest or Jest cover unit/integration testing with snapshot support.',
      'ESLint handles linting; pair with Prettier or Biome for formatting.',
      'Consider Playwright for full-stack browser automation on WSL.'
    ]
  }
]

const debugging = [
  {
    title: 'VS Code Debug Adapter',
    body: 'Install the "Node.js" debugger in VS Code, then use Run and Debug ➜ Node.js Launch to set breakpoints inside your WSL workspace.'
  },
  {
    title: 'Inspect CLI',
    body: 'Launch node with --inspect or --inspect-brk, then attach Chrome DevTools at chrome://inspect or the VS Code debugger.'
  },
  {
    title: 'pnpm + Turbo Logs',
    body: 'When commands run inside pnpm / turbo pipelines, stream logs with pnpm --reporter=append-only for deterministic CI output.'
  }
]

const resources = [
  {
    name: 'Official Node.js Docs',
    href: 'https://nodejs.org/en/docs',
    description: 'Release notes, API references, and LTS schedules maintained by the Node.js foundation.'
  },
  {
    name: 'NodeSource WSL Guide',
    href: 'https://github.com/nodesource/distributions',
    description: 'APT repositories and installation scripts for keeping Node.js builds updated on Debian/Ubuntu.'
  },
  {
    name: 'Microsoft WSL Samples',
    href: 'https://learn.microsoft.com/windows/wsl/tutorials/wsl-nodejs',
    description: 'Official walkthrough for combining WSL with VS Code, Node.js, and browser tools.'
  },
  {
    name: 'WSL Guide Development',
    href: '/development/',
    description: 'Return to the broader WSL development guide for cross-language best practices.'
  }
]

export default function NodePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600 text-white py-20">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" aria-hidden="true">
          <div className="absolute -top-24 right-1/3 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-7/12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-lime-300" />
                Node.js + Windows Subsystem for Linux
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
                Build, run, and debug Node.js apps natively on WSL
              </h1>
              <p className="mt-6 text-lg md:text-xl text-emerald-100/90 leading-relaxed max-w-2xl">
                Combine Linux performance with Windows tooling. This guide walks you through installing Node.js with
                modern version managers, configuring your editor, and shipping production-ready services from the WSL
                terminal.
              </p>
              <ul className="mt-8 space-y-4 text-base md:text-lg text-emerald-50/90">
                <li className="flex items-start gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-sm font-semibold">1</span>
                  <span>Prep your distro for Node.js with build-essential packages and shell tweaks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-sm font-semibold">2</span>
                  <span>Install and switch between Node.js versions using nvm, fnm, or asdf.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-sm font-semibold">3</span>
                  <span>Wire up VS Code debugging, package managers, and test runners for a polished workflow.</span>
                </li>
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/installation/"
                  className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold shadow-lg shadow-black/10 hover:bg-emerald-50 transition-colors"
                >
                  Install WSL First
                </Link>
                <Link
                  href="#prerequisites"
                  className="border-2 border-white/70 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
                >
                  Skip to Setup Steps
                </Link>
                <a
                  href="https://nodejs.org/en/download/package-manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold"
                >
                  Node.js package manager docs
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="relative rounded-2xl bg-gray-900/80 backdrop-blur border border-white/15 shadow-xl shadow-black/20 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime-300 via-emerald-300 to-cyan-300" />
                <div className="px-6 pt-6 pb-3">
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span className="font-semibold text-white/80">WSL Terminal</span>
                    <span>~/workspace</span>
                  </div>
                  <div className="mt-5 space-y-2 font-mono text-sm text-white/80">
                    <div><span className="text-lime-300">user@wsl</span><span className="text-cyan-300">:</span><span className="text-cyan-200">~</span><span className="text-white">$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash</span></div>
                    <div><span className="text-lime-300">user@wsl</span><span className="text-cyan-300">:</span><span className="text-cyan-200">~</span><span className="text-white">$ source ~/.nvm/nvm.sh</span></div>
                    <div><span className="text-lime-300">user@wsl</span><span className="text-cyan-300">:</span><span className="text-cyan-200">~/app</span><span className="text-white">$ nvm install --lts</span></div>
                    <div><span className="text-lime-300">user@wsl</span><span className="text-cyan-300">:</span><span className="text-cyan-200">~/app</span><span className="text-white">$ npm run dev</span></div>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-4 bg-gray-900/60 border-t border-white/10">
                  <p className="text-sm text-white/70 leading-relaxed">
                    Prefer a GUI? Pair this workflow with{' '}
                    <Link href="/development/" className="text-emerald-200 underline-offset-4 hover:underline">
                      VS Code remote development
                    </Link>{' '}
                    or use{' '}
                    <a
                      href="https://learn.microsoft.com/windows/wsl/connect-usb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-200 underline-offset-4 hover:underline"
                    >
                      WSLg
                    </a>{' '}
                    for GPU-accelerated browser previews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card mb-12" id="prerequisites">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Prerequisites</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Start with a healthy WSL distro (Ubuntu, Debian, Arch, etc.). Run these checks inside your WSL terminal
              before installing Node.js.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {prerequisites.map((item) => (
                <div key={item.title} className="bg-white/70 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                  <div className="terminal-window">
                    <div className="terminal-header">
                      <div className="terminal-dot bg-red-500" />
                      <div className="terminal-dot bg-yellow-500" />
                      <div className="terminal-dot bg-green-500" />
                      <span className="ml-3 text-gray-300 text-xs">bash</span>
                    </div>
                    <div className="terminal-content text-sm">
                      <code className="text-white">{item.command}</code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Install Node.js with a Version Manager</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Avoid using the system node package. Version managers keep projects isolated and simplify upgrades.
            </p>
            <div className="space-y-8">
              {managers.map((manager) => (
                <div key={manager.name} className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white/80 dark:bg-gray-900/60">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{manager.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl">{manager.description}</p>
                    </div>
                    <div className="terminal-window md:w-80">
                      <div className="terminal-header">
                        <div className="terminal-dot bg-red-500" />
                        <div className="terminal-dot bg-yellow-500" />
                        <div className="terminal-dot bg-green-500" />
                        <span className="ml-3 text-gray-300 text-xs">bash</span>
                      </div>
                      <div className="terminal-content text-sm">
                        <code className="text-white whitespace-pre-wrap">{manager.install}</code>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Common commands</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      {manager.usage.map((cmd) => (
                        <li key={cmd}>
                          <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{cmd}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Tooling Recommendations</h2>
            <div className="space-y-8">
              {tooling.map((category) => (
                <div key={category.title} className="bg-white/80 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{category.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {category.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Debugging Node.js in WSL</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {debugging.map((item) => (
                <div key={item.title} className="bg-white/80 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Further Reading</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Bookmark these resources to stay current with the Node.js ecosystem while working inside WSL.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {resources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.href}
                  target={resource.href.startsWith('http') ? '_blank' : undefined}
                  rel={resource.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block p-6 bg-white/80 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 rounded-xl hover:shadow-lg hover:shadow-emerald-500/20 transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{resource.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{resource.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
