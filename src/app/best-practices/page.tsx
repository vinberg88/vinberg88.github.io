export default function BestPracticesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            WSL Best Practices
          </h1>
          <p className="text-xl text-green-100">
            Proven strategies and best practices for optimal WSL development workflows.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card dark:bg-gray-900/70 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">✅ Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Store projects in Linux file system for better performance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Use VS Code with Remote-WSL extension</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Configure .wslconfig for resource limits</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Use package managers (apt, npm, pip) within WSL</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Enable systemd for better service management</span>
                </li>
              </ul>
            </div>

            <div className="card dark:bg-gray-900/70 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">❌ Don't</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Run Linux tools on Windows files frequently</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Edit Linux files from Windows apps</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Install GUI applications without proper setup</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Mix Windows and Linux PATH variables carelessly</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Ignore memory and CPU limits</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card mt-12 dark:bg-gray-900/70 dark:border-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Development Workflow Recommendations</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">File Organization</h3>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200 mb-2">
                    <strong>Recommended Structure:</strong>
                  </p>
                  <div className="bg-gray-900 text-gray-100 dark:bg-gray-950 dark:text-gray-200 p-3 rounded text-sm font-mono">
                    ~/projects/web/my-react-app/<br/>
                    ~/projects/python/my-django-app/<br/>
                    ~/projects/go/my-api/<br/>
                    ~/dotfiles/
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Version Control</h3>
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="text-green-800 dark:text-green-200">
                    Configure Git with your credentials and use SSH keys for authentication:
                  </p>
                  <div className="mt-2 bg-gray-900 text-gray-100 dark:bg-gray-950 dark:text-gray-200 p-3 rounded text-sm font-mono">
                    git config --global user.name "Your Name"<br/>
                    git config --global user.email "your@email.com"<br/>
                    ssh-keygen -t ed25519 -C "your@email.com"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}