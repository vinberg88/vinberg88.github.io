import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="terminal-window mb-8">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="ml-4 text-gray-300 text-sm">bash</span>
          </div>
          <div className="terminal-content">
            <div className="space-y-2">
              <div>
                <span className="text-wsl-green">user@PC</span>
                <span className="text-blue-300">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$ cd /page-not-found</span>
              </div>
              <div className="text-red-400">bash: cd: /page-not-found: No such file or directory</div>
              <div>
                <span className="text-wsl-green">user@PC</span>
                <span className="text-blue-300">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$ ls -la</span>
              </div>
              <div className="text-gray-300">404 - Page not found</div>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="btn-primary inline-block"
          >
            Go Home
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link href="/installation" className="text-blue-600 hover:underline">
              Installation Guide
            </Link>
            <Link href="/configuration" className="text-blue-600 hover:underline">
              Configuration
            </Link>
            <Link href="/development" className="text-blue-600 hover:underline">
              Development Setup
            </Link>
            <Link href="/troubleshooting" className="text-blue-600 hover:underline">
              Troubleshooting
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}