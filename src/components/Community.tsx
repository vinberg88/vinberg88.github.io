import Link from 'next/link'

export default function Community() {
  const resources = [
    {
      title: 'Official Microsoft Docs',
      description: 'Comprehensive documentation and tutorials from Microsoft',
      link: 'https://docs.microsoft.com/en-us/windows/wsl/',
      icon: '📚',
      type: 'Documentation'
    },
    {
      title: 'WSL GitHub Repository',
      description: 'Source code, issues, and community discussions',
      link: 'https://github.com/microsoft/WSL',
      icon: '🐙',
      type: 'Community'
    },
    {
      title: 'r/bashonubuntuonwindows',
      description: 'Active Reddit community for WSL users and developers',
      link: 'https://reddit.com/r/bashonubuntuonwindows',
      icon: '🗨️',
      type: 'Community'
    },
    {
      title: 'Stack Overflow',
      description: 'Get help with specific WSL problems and solutions',
      link: 'https://stackoverflow.com/questions/tagged/windows-subsystem-for-linux',
      icon: '❓',
      type: 'Q&A'
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Community & Resources
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join the vibrant WSL community. Get help, share knowledge, and stay updated 
            with the latest developments in Windows Subsystem for Linux.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card hover:shadow-lg hover:shadow-wsl-blue/30 dark:hover:shadow-wsl-blue/20 transition-shadow duration-200 block"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{resource.icon}</div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {resource.title}
                    </h3>
                    <span className="text-xs bg-wsl-blue/20 text-wsl-blue dark:bg-wsl-blue/30 dark:text-wsl-blue px-2 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {resource.description}
                  </p>
                </div>
                <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white dark:bg-gray-900/70 rounded-2xl p-8 shadow-md shadow-gray-900/10 dark:shadow-black/40">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Contribute to This Guide
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              This WSL guide is a community effort. Help us improve it by contributing 
              tutorials, fixes, or new content. Every contribution makes the WSL 
              ecosystem better for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/vinberg88/vinberg88.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Contribute on GitHub</span>
              </a>
              <Link
                href="/resources"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>View All Resources</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}