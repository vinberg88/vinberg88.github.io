import Link from 'next/link'

export default function ConfigurationPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            WSL Configuration Guide
          </h1>
          <p className="text-xl text-green-100">
            Optimize your WSL environment with advanced configuration options, performance tuning, and customization.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* WSL Configuration File */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">WSL Configuration (.wslconfig)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Create a <code className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100 px-2 py-1 rounded">.wslconfig</code> file in your Windows user directory 
              (<code className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100 px-2 py-1 rounded">C:\Users\&lt;username&gt;\.wslconfig</code>) to configure global WSL settings.
            </p>
            
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">.wslconfig</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-1 text-sm">
                  <div className="text-gray-400"># WSL 2 Global Configuration</div>
                  <div className="text-white">[wsl2]</div>
                  <div className="text-white"><span className="text-blue-300">memory</span>=<span className="text-green-300">8GB</span> <span className="text-gray-400"># Limit memory usage</span></div>
                  <div className="text-white"><span className="text-blue-300">processors</span>=<span className="text-green-300">4</span> <span className="text-gray-400"># Limit CPU cores</span></div>
                  <div className="text-white"><span className="text-blue-300">swap</span>=<span className="text-green-300">2GB</span> <span className="text-gray-400"># Set swap file size</span></div>
                  <div className="text-white"><span className="text-blue-300">swapFile</span>=<span className="text-green-300">C:\\temp\\wsl-swap.vhdx</span></div>
                  <div className="text-white"><span className="text-blue-300">localhostForwarding</span>=<span className="text-green-300">true</span></div>
                  <div className="text-white"><span className="text-blue-300">nestedVirtualization</span>=<span className="text-green-300">true</span></div>
                  <div className="text-white"><span className="text-blue-300">pageReporting</span>=<span className="text-green-300">true</span></div>
                  <div className="text-white"><span className="text-blue-300">guiApplications</span>=<span className="text-green-300">true</span></div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 dark:bg-blue-900/30 dark:border-blue-500/70 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700 dark:text-blue-200">
                    <strong>Note:</strong> After creating or modifying <code>.wslconfig</code>, restart WSL with 
                    <code className="bg-blue-100 dark:bg-blue-900/40 dark:text-blue-100 px-1 py-0.5 rounded mx-1">wsl --shutdown</code> for changes to take effect.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Distribution-specific Configuration */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Distribution Configuration (wsl.conf)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Create a <code className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100 px-2 py-1 rounded">/etc/wsl.conf</code> file inside your Linux distribution 
              to configure distribution-specific settings.
            </p>
            
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">Ubuntu: /etc/wsl.conf</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-1 text-sm">
                  <div className="text-gray-400"># Network configuration</div>
                  <div className="text-white">[network]</div>
                  <div className="text-white"><span className="text-blue-300">generateHosts</span> = <span className="text-green-300">true</span></div>
                  <div className="text-white"><span className="text-blue-300">generateResolvConf</span> = <span className="text-green-300">true</span></div>
                  <div className="text-white"><span className="text-blue-300">hostname</span> = <span className="text-green-300">wsl-ubuntu</span></div>
                  <div className="text-white"></div>
                  <div className="text-gray-400"># Boot configuration</div>
                  <div className="text-white">[boot]</div>
                  <div className="text-white"><span className="text-blue-300">systemd</span> = <span className="text-green-300">true</span></div>
                  <div className="text-white"></div>
                  <div className="text-gray-400"># Automount configuration</div>
                  <div className="text-white">[automount]</div>
                  <div className="text-white"><span className="text-blue-3300">enabled</span> = <span className="text-green-300">true</span></div>
                  <div className="text-white"><span className="text-blue-300">root</span> = <span className="text-green-300">/mnt/</span></div>
                  <div className="text-white"><span className="text-blue-300">options</span> = <span className="text-green-300">"metadata,umask=22,fmask=11"</span></div>
                  <div className="text-white"></div>
                  <div className="text-gray-400"># Interop configuration</div>
                  <div className="text-white">[interop]</div>
                  <div className="text-white"><span className="text-blue-300">enabled</span> = <span className="text-green-300">true</span></div>
                  <div className="text-white"><span className="text-blue-300">appendWindowsPath</span> = <span className="text-green-300">true</span></div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300">
              To create this file, run: <code className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100 px-2 py-1 rounded">sudo nano /etc/wsl.conf</code>
            </p>
          </div>

          {/* Performance Optimization */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Performance Optimization</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">File System Performance</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-400 dark:bg-green-900/30 dark:border-green-500/70 p-4">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ DO: Store Linux files in WSL file system</h4>
                    <p className="text-green-700 dark:text-green-200 text-sm mb-2">
                      Keep your project files in the Linux file system for best performance:
                    </p>
                    <code className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                      /home/username/projects/my-app
                    </code>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-400 dark:bg-red-900/30 dark:border-red-500/70 p-4">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ AVOID: Cross-file-system operations</h4>
                    <p className="text-red-700 dark:text-red-200 text-sm mb-2">
                      Avoid running Linux tools on Windows files (slower performance):
                    </p>
                    <code className="bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm">
                      /mnt/c/Users/username/Desktop/my-app
                    </code>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Memory Management</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  WSL 2 uses a dynamic memory allocation. You can limit memory usage and reclaim unused memory:
                </p>
                
                <div className="terminal-window mb-4">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-gray-300 text-sm">PowerShell</span>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-2">
                      <div className="text-gray-400"># Reclaim memory from WSL</div>
                      <div>
                        <span className="text-blue-400">PS&gt;</span>
                        <span className="text-white ml-2">wsl --shutdown</span>
                      </div>
                      <div>
                        <span className="text-blue-400">PS&gt;</span>
                        <span className="text-white ml-2">Get-Process vmmem | Stop-Process -Force</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Disk Space Management</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  WSL disk images can grow large over time. Here's how to compact them:
                </p>
                
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-gray-300 text-sm">PowerShell (Admin)</span>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-2">
                      <div className="text-gray-400"># Shutdown WSL first</div>
                      <div>
                        <span className="text-blue-400">PS&gt;</span>
                        <span className="text-white ml-2">wsl --shutdown</span>
                      </div>
                      <div className="text-gray-400"># Compact the disk</div>
                      <div>
                        <span className="text-blue-400">PS&gt;</span>
                        <span className="text-white ml-2">diskpart</span>
                      </div>
                      <div className="text-gray-300 ml-4">select vdisk file="C:\Users\&lt;username&gt;\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu_79rhkp1fndgsc\LocalState\ext4.vhdx"</div>
                      <div className="text-gray-300 ml-4">compact vdisk</div>
                      <div className="text-gray-300 ml-4">exit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Networking Configuration */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Networking Configuration</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Port Forwarding</h3>
                <p className="text-gray-700 mb-4">
                  Access services running in WSL from Windows or external networks:
                </p>
                
                <div className="terminal-window mb-4">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-gray-300 text-sm">PowerShell (Admin)</span>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-2">
                      <div className="text-gray-400"># Forward port 3000 from WSL to Windows</div>
                      <div>
                        <span className="text-blue-400">PS&gt;</span>
                        <span className="text-white ml-2">netsh interface portproxy add v4tov4 listenport=3000 listenaddress=0.0.0.0 connectport=3000 connectaddress=172.x.x.x</span>
                      </div>
                      <div className="text-gray-400"># Get WSL IP address</div>
                      <div>
                        <span className="text-blue-400">PS&gt;</span>
                        <span className="text-white ml-2">wsl hostname -I</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">DNS Configuration</h3>
                <p className="text-gray-700 mb-4">
                  If you're experiencing DNS issues, you can configure custom DNS servers:
                </p>
                
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
                        <span className="text-white">$ sudo nano /etc/resolv.conf</span>
                      </div>
                      <div className="text-gray-400"># Add these lines:</div>
                      <div className="text-white">nameserver 8.8.8.8</div>
                      <div className="text-white">nameserver 1.1.1.1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shell Configuration */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Shell Configuration</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Install Zsh and Oh My Zsh</h3>
                <p className="text-gray-700 mb-4">
                  Enhance your shell experience with Zsh and Oh My Zsh:
                </p>
                
                <div className="terminal-window mb-4">
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
                        <span className="text-white">$ sudo apt install zsh</span>
                      </div>
                      <div>
                        <span className="text-wsl-green">user@PC</span>
                        <span className="text-blue-300">:</span>
                        <span className="text-blue-400">~</span>
                        <span className="text-white">$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Useful Aliases</h3>
                <p className="text-gray-700 mb-4">
                  Add these aliases to your <code className="bg-gray-100 px-2 py-1 rounded">~/.bashrc</code> or 
                  <code className="bg-gray-100 px-2 py-1 rounded">~/.zshrc</code>:
                </p>
                
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-gray-300 text-sm">~/.bashrc</span>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-1 text-sm">
                      <div className="text-gray-400"># WSL Aliases</div>
                      <div className="text-white">alias ll='ls -alF'</div>
                      <div className="text-white">alias la='ls -A'</div>
                      <div className="text-white">alias l='ls -CF'</div>
                      <div className="text-white">alias ..='cd ..'</div>
                      <div className="text-white">alias ...='cd ../..'</div>
                      <div className="text-white">alias grep='grep --color=auto'</div>
                      <div className="text-white">alias winhome='cd /mnt/c/Users/$USER'</div>
                      <div className="text-white">alias desktop='cd /mnt/c/Users/$USER/Desktop'</div>
                      <div className="text-white">alias documents='cd /mnt/c/Users/$USER/Documents'</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="card">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Next Steps</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Keep your momentum going with these curated guides:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/development" className="block p-6 bg-blue-50 dark:bg-wsl-blue/10 rounded-lg hover:bg-blue-100 dark:hover:bg-wsl-blue/20 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Development Setup</h3>
                <p className="text-gray-600 dark:text-gray-300">Set up your development environment with essential tools and VS Code integration.</p>
              </Link>
              
              <Link href="/best-practices" className="block p-6 bg-green-50 dark:bg-green-900/30 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Best Practices</h3>
                <p className="text-gray-600 dark:text-gray-300">Learn the dos and don'ts of WSL development for optimal productivity.</p>
              </Link>
              
              <Link href="/tools" className="block p-6 bg-purple-50 dark:bg-purple-900/30 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Essential Tools</h3>
                <p className="text-gray-600 dark:text-gray-300">Discover must-have tools and applications that work great with WSL.</p>
              </Link>
              
              <Link href="/troubleshooting" className="block p-6 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Troubleshooting</h3>
                <p className="text-gray-600 dark:text-gray-300">Common configuration issues and their solutions.</p>
              </Link>

              <a
                href="https://gemini.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore Gemini AI</h3>
                <p className="text-gray-600">
                  Experiment with Google's Gemini models inside your WSL workflows—generate scripts, documentation, and
                  automation ideas directly from the terminal.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}