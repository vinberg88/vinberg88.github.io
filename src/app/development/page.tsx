import Link from 'next/link'

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            WSL Development Guide
          </h1>
          <p className="text-xl text-purple-100">
            Set up your perfect development environment with WSL, VS Code, and essential tools.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* VS Code Setup */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">VS Code with WSL</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Visual Studio Code provides excellent integration with WSL through the Remote-WSL extension.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Install VS Code and Remote-WSL Extension</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Download and install <a href="https://code.visualstudio.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Visual Studio Code</a> on Windows</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Install the <strong>Remote - WSL</strong> extension from the VS Code marketplace</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Open WSL and run <code className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100 px-2 py-1 rounded">code .</code> to launch VS Code in WSL mode</p>
                  </div>
                </div>
              </div>
              
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="ml-4 text-gray-300 text-sm">Ubuntu</span>
                </div>
                <div className="terminal-content">
                  <div className="space-y-2">
                    <div>
                      <span className="text-wsl-green">user@PC</span>
                      <span className="text-blue-300">:</span>
                      <span className="text-blue-400">~/projects</span>
                      <span className="text-white">$ code my-project</span>
                    </div>
                    <div className="text-gray-300">Installing VS Code Server...</div>
                    <div className="text-green-400">✓ VS Code Server installed successfully!</div>
                    <div className="text-gray-300">Opening VS Code...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Essential Development Tools */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Essential Development Tools</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Version Control */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Git</h3>
                <div className="terminal-window mb-4">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-1 text-sm">
                      <div><span className="text-wsl-green">$</span> <span className="text-white">sudo apt update</span></div>
                      <div><span className="text-wsl-green">$</span> <span className="text-white">sudo apt install git</span></div>
                      <div><span className="text-wsl-green">$</span> <span className="text-white">git config --global user.name "Your Name"</span></div>
                      <div><span className="text-wsl-green">$</span> <span className="text-white">git config --global user.email "your.email@example.com"</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Node.js */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Node.js & npm</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Use a version manager to keep Node.js installations lightweight and isolated per project. Our
                  dedicated <Link href="/node/" className="text-blue-600 hover:underline">Node.js on WSL guide</Link>
                  walks through nvm, fnm, and asdf in detail.
                </p>
                <div className="terminal-window mb-4">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-1 text-sm">
                      <div><span className="text-wsl-green">$</span> <span className="text-white">curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash</span></div>
                      <div><span className="text-wsl-green">$</span> <span className="text-white">source ~/.nvm/nvm.sh</span></div>
                      <div><span className="text-wsl-green">$</span> <span className="text-white">nvm install --lts</span></div>
                      <div><span className="text-wsl-green">$</span> <span className="text-white">node --version && npm --version</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Python */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Python & pip</h3>
                <div className="terminal-window mb-4">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-1 text-sm">
                      <div><span className="text-wsl-green">$</span> <span className="text-white">sudo apt install python3 python3-pip</span></div>
                      <div><span className="text-wsl-green">$</span> <span className="text-white">python3 --version</span></div>
                      <div><span className="text-wsl-green">$</span> <span className="text-white">pip3 --version</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Docker */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Docker</h3>
                <div className="terminal-window mb-4">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-1 text-sm">
                      <div><span className="text-wsl-green">$</span> <span className="text-white">curl -fsSL https://get.docker.com -o get-docker.sh</span></div>
                      <div><span className="text-wsl-green">$</span> <span className="text-white">sudo sh get-docker.sh</span></div>
                      <div><span className="text-wsl-green">$</span> <span className="text-white">sudo usermod -aG docker $USER</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Structure */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Recommended Project Structure</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Organize your projects in the WSL file system for best performance:
            </p>
            
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">Directory Structure</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-1 text-sm font-mono">
                  <div className="text-white">~/</div>
                  <div className="text-white">├── projects/</div>
                  <div className="text-white">│   ├── web/</div>
                  <div className="text-white">│   │   ├── my-react-app/</div>
                  <div className="text-white">│   │   └── my-nextjs-site/</div>
                  <div className="text-white">│   ├── python/</div>
                  <div className="text-white">│   │   ├── ml-project/</div>
                  <div className="text-white">│   │   └── django-app/</div>
                  <div className="text-white">│   └── go/</div>
                  <div className="text-white">│       └── my-api/</div>
                  <div className="text-white">├── dotfiles/</div>
                  <div className="text-white">└── scripts/</div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-400 dark:bg-green-900/30 dark:border-green-500/70 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700 dark:text-green-200">
                    <strong>Pro Tip:</strong> Keep all your development projects in the Linux file system 
                    (starting with <code className="bg-green-100 dark:bg-green-900/40 dark:text-green-200 px-1 py-0.5 rounded">/home/username/</code>) 
                    for optimal performance and tool compatibility.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Development Workflows */}
          <div className="card">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Development Workflows</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Web Development with Next.js</h3>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-gray-300 text-sm">Creating a Next.js Project</span>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-2">
                      <div>
                        <span className="text-wsl-green">user@PC</span>
                        <span className="text-blue-300">:</span>
                        <span className="text-blue-400">~/projects/web</span>
                        <span className="text-white">$ npx create-next-app@latest my-app</span>
                      </div>
                      <div>
                        <span className="text-wsl-green">user@PC</span>
                        <span className="text-blue-300">:</span>
                        <span className="text-blue-400">~/projects/web</span>
                        <span className="text-white">$ cd my-app</span>
                      </div>
                      <div>
                        <span className="text-wsl-green">user@PC</span>
                        <span className="text-blue-300">:</span>
                        <span className="text-blue-400">~/projects/web/my-app</span>
                        <span className="text-white">$ code .</span>
                      </div>
                      <div>
                        <span className="text-wsl-green">user@PC</span>
                        <span className="text-blue-3300">:</span>
                        <span className="text-blue-400">~/projects/web/my-app</span>
                        <span className="text-white">$ npm run dev</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Python Development with Virtual Environments</h3>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-gray-300 text-sm">Python Project Setup</span>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-2">
                      <div>
                        <span className="text-wsl-green">user@PC</span>
                        <span className="text-blue-300">:</span>
                        <span className="text-blue-400">~/projects/python</span>
                        <span className="text-white">$ python3 -m venv my-project-env</span>
                      </div>
                      <div>
                        <span className="text-wsl-green">user@PC</span>
                        <span className="text-blue-300">:</span>
                        <span className="text-blue-400">~/projects/python</span>
                        <span className="text-white">$ source my-project-env/bin/activate</span>
                      </div>
                      <div>
                        <span className="text-yellow-400">(my-project-env)</span>
                        <span className="text-wsl-green"> user@PC</span>
                        <span className="text-blue-300">:</span>
                        <span className="text-blue-400">~/projects/python</span>
                        <span className="text-white">$ pip install django</span>
                      </div>
                      <div>
                        <span className="text-yellow-400">(my-project-env)</span>
                        <span className="text-wsl-green"> user@PC</span>
                        <span className="text-blue-300">:</span>
                        <span className="text-blue-400">~/projects/python</span>
                        <span className="text-white">$ code .</span>
                      </div>
                    </div>
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