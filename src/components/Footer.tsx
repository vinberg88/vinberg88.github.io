import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-wsl-blue rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">WSL</span>
              </div>
              <span className="text-xl font-bold">WSL Guide</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your comprehensive resource for Windows Subsystem for Linux. Learn, configure, and master WSL development workflows.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/microsoft/WSL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://docs.microsoft.com/en-us/windows/wsl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Microsoft Docs</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0v11.4l11.4-11.4H0zm12.6 0v11.4L24 0H12.6zM0 12.6V24h11.4L0 12.6zm12.6 11.4H24V12.6L12.6 24z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/installation" className="text-gray-400 hover:text-white transition-colors">Installation</Link></li>
              <li><Link href="/configuration" className="text-gray-400 hover:text-white transition-colors">Configuration</Link></li>
              <li><Link href="/development" className="text-gray-400 hover:text-white transition-colors">Development</Link></li>
              <li><Link href="/troubleshooting" className="text-gray-400 hover:text-white transition-colors">Troubleshooting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/best-practices" className="text-gray-400 hover:text-white transition-colors">Best Practices</Link></li>
              <li><Link href="/tools" className="text-gray-400 hover:text-white transition-colors">Tools & Apps</Link></li>
              <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">External Resources</Link></li>
              <li><a href="https://github.com/microsoft/WSL/issues" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Report Issues</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 WSL Guide. This is an unofficial community resource. WSL is a trademark of Microsoft Corporation.</p>
        </div>
      </div>
    </footer>
  )
}