const communityLinks = [
  {
    title: 'GitHub Discussions',
    description: 'Ask questions, report issues, or share workarounds with maintainers and the community.',
    href: 'https://github.com/vinberg88/vinberg88.github.io/discussions',
    badge: 'Community',
    icon: '🐙',
  },
  {
    title: 'WSL on X (Twitter)',
    description: 'Get breaking news, quick tips, and WSL release highlights from Mattias on X.',
    href: 'https://x.com/mattiasvinberg',
    badge: 'Updates',
    icon: '✉️',
  },
  {
    title: 'YouTube Deep Dives',
    description: 'Watch walkthroughs and troubleshooting sessions tailored for Windows Subsystem for Linux.',
    href: 'https://www.youtube.com/@mattiasvinberg',
    badge: 'Video',
    icon: '▶️',
  },
  {
    title: 'LinkedIn Pulse',
    description: 'Follow professional WSL insights, enterprise tips, and release summaries on LinkedIn.',
    href: 'https://www.linkedin.com/in/mattias-vinberg/',
    badge: 'Network',
    icon: '💼',
  },
  {
    title: 'Reddit Community',
    description: 'Join thousands of WSL users sharing fixes in r/bashonubuntuonwindows.',
    href: 'https://reddit.com/r/bashonubuntuonwindows',
    badge: 'Community',
    icon: '🗨️',
  },
  {
    title: 'GitHub Issues',
    description: 'Track upstream fixes or file bugs directly with the Microsoft WSL engineering team.',
    href: 'https://github.com/microsoft/WSL/issues',
    badge: 'Official',
    icon: '⚙️',
  },
]

export default function TroubleshootingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <section className="bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-700 dark:to-orange-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            WSL Troubleshooting Guide
          </h1>
          <p className="text-xl text-red-100">
            Common issues and solutions for Windows Subsystem for Linux problems.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Common Installation Issues</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Error: "The Windows Subsystem for Linux optional component is not enabled"
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Enable WSL feature manually:</p>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
                </div>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Error: "WSL 2 requires an update to its kernel component"
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Download and install the WSL2 Linux kernel update package from Microsoft.</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Error: "Please enable the Virtual Machine Platform Windows feature"
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Enable Virtual Machine Platform:</p>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Performance Issues</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Slow File Operations</h3>
                <div className="bg-yellow-50 dark:bg-yellow-900/40 border-l-4 border-yellow-400 dark:border-yellow-500 p-4">
                  <p className="text-yellow-800 dark:text-yellow-200">
                    <strong>Solution:</strong> Store your project files in the Linux file system 
                    (<code>/home/username/</code>) instead of the Windows file system (<code>/mnt/c/</code>).
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">High Memory Usage</h3>
                <div className="bg-blue-50 dark:bg-blue-900/40 border-l-4 border-blue-400 dark:border-blue-500 p-4">
                  <p className="text-blue-800 dark:text-blue-200">
                    <strong>Solution:</strong> Configure memory limits in <code>.wslconfig</code> file:
                  </p>
                  <div className="mt-2 bg-gray-900 text-gray-100 p-2 rounded text-sm font-mono">
                    [wsl2]<br/>
                    memory=4GB
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Network Issues</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cannot Access Internet</h3>
                <div className="bg-green-50 dark:bg-green-900/40 border-l-4 border-green-400 dark:border-green-500 p-4">
                  <p className="text-green-800 dark:text-green-200">
                    <strong>Solution:</strong> Check DNS configuration in <code>/etc/resolv.conf</code>:
                  </p>
                  <div className="mt-2 bg-gray-900 text-gray-100 p-2 rounded text-sm font-mono">
                    nameserver 8.8.8.8<br/>
                    nameserver 1.1.1.1
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-gray-900 dark:bg-gray-950 text-white rounded-2xl shadow-xl border border-gray-800 dark:border-gray-700 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-3xl font-bold">Get help from the community</h2>
                  <p className="text-gray-300 max-w-2xl">
                    When fixes take longer than expected, reach out to the WSL community. These channels are
                    monitored by enthusiasts and Microsoft engineers who share scripts, workarounds, and the latest patches.
                  </p>
                </div>
                <a
                  href="https://github.com/vinberg88/vinberg88.github.io/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-wsl-blue text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  Open a troubleshooting request
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {communityLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between rounded-xl border border-gray-800 bg-gray-950/60 p-5 hover:border-wsl-blue hover:bg-gray-900 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl" aria-hidden="true">{link.icon}</span>
                        <span className="text-xs uppercase tracking-wide rounded-full bg-gray-800 px-3 py-1 text-gray-300 group-hover:bg-wsl-blue group-hover:text-white transition-colors">
                          {link.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{link.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{link.description}</p>
                    </div>
                    <div className="mt-4 flex items-center text-sm font-medium text-wsl-blue group-hover:text-white transition-colors">
                      Visit channel
                      <svg
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}