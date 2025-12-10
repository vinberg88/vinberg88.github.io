import Link from 'next/link'

import SocialLinks from './SocialLinks'

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
            <SocialLinks className="mt-2" />
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
          <p>&copy; 2025 WSL Guide from Sweden. This is an unofficial community resource. WSL is a trademark of Microsoft Corporation.</p>
        </div>
      </div>
    </footer>
  )
}
