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
      <section className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Node.js on WSL</h1>
          <p className="text-xl text-emerald-100">
            Configure a blazing-fast Node.js environment inside Windows Subsystem for Linux—covering installation,
            version management, tooling, and debugging best practices.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/installation/"
              className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-emerald-50 transition-colors"
            >
              Install WSL First
            </Link>
            <a
              href="https://nodejs.org/en/download/package-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Node.js Downloads
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card mb-12">
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
