import Link from 'next/link'

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-wsl-blue to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            WSL Installation Guide
          </h1>
          <p className="text-xl text-blue-100">
            Complete step-by-step instructions to install Windows Subsystem for Linux on your Windows machine.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Prerequisites */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Prerequisites</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700"><strong>Windows 10 version 2004</strong> (Build 19041) or higher, or <strong>Windows 11</strong></p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700"><strong>Administrator privileges</strong> on your Windows machine</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700"><strong>Virtualization enabled</strong> in BIOS/UEFI (for WSL 2)</p>
              </div>
            </div>
          </div>

          {/* Method 1: Simple Installation */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Method 1: Simple Installation (Recommended)</h2>
            <p className="text-gray-700 mb-6">
              The easiest way to install WSL is using the new simplified command. This will install WSL 2 with Ubuntu by default.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 1: Open PowerShell as Administrator</h3>
                <p className="text-gray-700 mb-3">
                  Right-click on the Start button and select "Windows PowerShell (Admin)" or "Terminal (Admin)".
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 2: Run the Installation Command</h3>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-gray-300 text-sm">PowerShell (Admin)</span>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-2">
                      <div>
                        <span className="text-blue-400">PS C:\\Windows\\system32&gt;</span>
                        <span className="text-white ml-2">wsl --install</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-3">
                  This command will automatically enable the required Windows features, download and install the Linux kernel, 
                  and install Ubuntu as the default distribution.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 3: Restart Your Computer</h3>
                <p className="text-gray-700">
                  After the installation completes, restart your computer to finish the setup process.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 4: Complete Ubuntu Setup</h3>
                <p className="text-gray-700 mb-3">
                  After restarting, Ubuntu will automatically launch and complete the installation. 
                  You'll be prompted to create a username and password for your Linux user account.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <strong>Important:</strong> The username and password you create here are separate from your Windows credentials. 
                        Choose a secure password and remember it – you'll need it for sudo commands.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Method 2: Manual Installation */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Method 2: Manual Installation</h2>
            <p className="text-gray-700 mb-6">
              If you prefer more control over the installation process or the simple method doesn't work, 
              you can install WSL manually.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 1: Enable Windows Features</h3>
                <p className="text-gray-700 mb-3">Run these commands in PowerShell as Administrator:</p>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-gray-300 text-sm">PowerShell (Admin)</span>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-2">
                      <div>
                        <span className="text-blue-400">PS&gt;</span>
                        <span className="text-white ml-2">dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart</span>
                      </div>
                      <div>
                        <span className="text-blue-400">PS&gt;</span>
                        <span className="text-white ml-2">dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 2: Download and Install Linux Kernel Update</h3>
                <p className="text-gray-700 mb-3">
                  Download the <a href="https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi" 
                  className="text-wsl-blue hover:underline" target="_blank" rel="noopener noreferrer">
                  WSL2 Linux kernel update package</a> and install it.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 3: Set WSL 2 as Default</h3>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-gray-300 text-sm">PowerShell</span>
                  </div>
                  <div className="terminal-content">
                    <div>
                      <span className="text-blue-400">PS&gt;</span>
                      <span className="text-white ml-2">wsl --set-default-version 2</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 4: Install a Linux Distribution</h3>
                <p className="text-gray-700 mb-3">
                  Install your preferred Linux distribution from the Microsoft Store or using command line:
                </p>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-gray-300 text-sm">PowerShell</span>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-2">
                      <div className="text-gray-400"># Install Ubuntu (default)</div>
                      <div>
                        <span className="text-blue-400">PS&gt;</span>
                        <span className="text-white ml-2">wsl --install -d Ubuntu</span>
                      </div>
                      <div className="text-gray-400 mt-4"># Or list available distributions</div>
                      <div>
                        <span className="text-blue-400">PS&gt;</span>
                        <span className="text-white ml-2">wsl --list --online</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Verify Installation</h2>
            <p className="text-gray-700 mb-6">
              Once installation is complete, verify that WSL is working correctly:
            </p>
            
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">PowerShell</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div>
                    <span className="text-blue-400">PS&gt;</span>
                    <span className="text-white ml-2">wsl --list --verbose</span>
                  </div>
                  <div className="text-green-400">  NAME            STATE           VERSION</div>
                  <div className="text-white">* Ubuntu          Running         2</div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">You can also test by running a Linux command:</p>
            
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
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ uname -a</span>
                  </div>
                  <div className="text-gray-300">Linux PC 5.15.90.1-microsoft-standard-WSL2 #1 SMP x86_64 GNU/Linux</div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="card">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Next Steps</h2>
            <p className="text-gray-700 mb-6">
              Congratulations! You've successfully installed WSL. Here's what you can do next:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/configuration" className="block p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Configure WSL</h3>
                <p className="text-gray-600">Set up your WSL environment, configure settings, and optimize performance.</p>
              </Link>
              
              <Link href="/development" className="block p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Development Setup</h3>
                <p className="text-gray-600">Install development tools, set up VS Code, and create your first project.</p>
              </Link>
              
              <Link href="/tools" className="block p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Tools</h3>
                <p className="text-gray-600">Discover must-have tools and applications for WSL development.</p>
              </Link>
              
              <Link href="/troubleshooting" className="block p-6 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Troubleshooting</h3>
                <p className="text-gray-600">Common issues and solutions to help you resolve WSL problems.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}