import Link from 'next/link'

export default function NetworkingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Networking Deep Dive
          </h1>
          <p className="text-xl text-teal-100">
            Master port forwarding, DNS, VPN compatibility, and the mirrored networking mode in WSL&nbsp;2.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Networking Modes Overview */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">WSL 2 Networking Modes</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              WSL&nbsp;2 supports two networking modes. The mode you choose affects how your distro communicates
              with the host, your LAN, and the internet.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">NAT Mode (Default)</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                  <li>WSL gets its own virtual network adapter with a private IP</li>
                  <li>Host acts as a NAT gateway for outbound traffic</li>
                  <li>Localhost forwarding bridges ports between WSL and Windows</li>
                  <li>Works out of the box for most scenarios</li>
                </ul>
              </div>
              <div className="rounded-xl bg-blue-50 dark:bg-wsl-blue/10 border border-blue-200 dark:border-blue-800 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Mirrored Mode (New)</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                  <li>WSL shares the Windows host network interfaces</li>
                  <li>Same IP address as the host — no NAT layer</li>
                  <li>Better VPN and corporate network compatibility</li>
                  <li>IPv6 support and multicast work correctly</li>
                </ul>
              </div>
            </div>

            <div className="terminal-window mt-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">.wslconfig</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Enable mirrored networking mode</div>
                  <div className="text-emerald-300">[wsl2]</div>
                  <div className="text-white">networkingMode=mirrored</div>
                  <div className="text-white mt-2">dnsTunneling=true</div>
                  <div className="text-white">autoProxy=true</div>
                </div>
              </div>
            </div>
          </div>

          {/* Port Forwarding */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Port Forwarding</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              In NAT mode, <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">localhost</code> forwarding
              is enabled by default — services running in WSL on port 3000 are accessible at <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">localhost:3000</code> from
              Windows. For access from other machines on your LAN, forward ports explicitly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Expose a WSL Service to Your LAN</h3>
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">PowerShell (Admin)</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Find your WSL IP address</div>
                  <div>
                    <span className="text-blue-400">PS&gt;</span>
                    <span className="text-white ml-2">wsl hostname -I</span>
                  </div>
                  <div className="text-gray-300">172.25.160.1</div>
                  <div className="mt-2 text-gray-400"># Forward port 3000 from Windows to WSL</div>
                  <div>
                    <span className="text-blue-400">PS&gt;</span>
                    <span className="text-white ml-2">netsh interface portproxy add v4tov4 listenport=3000 listenaddress=0.0.0.0 connectport=3000 connectaddress=172.25.160.1</span>
                  </div>
                  <div className="mt-2 text-gray-400"># Allow traffic through Windows Firewall</div>
                  <div>
                    <span className="text-blue-400">PS&gt;</span>
                    <span className="text-white ml-2">New-NetFirewallRule -DisplayName &quot;WSL Port 3000&quot; -Direction Inbound -LocalPort 3000 -Protocol TCP -Action Allow</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">List and Remove Port Proxies</h3>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">PowerShell (Admin)</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Show all active port proxies</div>
                  <div>
                    <span className="text-blue-400">PS&gt;</span>
                    <span className="text-white ml-2">netsh interface portproxy show all</span>
                  </div>
                  <div className="mt-2 text-gray-400"># Remove a specific forwarding rule</div>
                  <div>
                    <span className="text-blue-400">PS&gt;</span>
                    <span className="text-white ml-2">netsh interface portproxy delete v4tov4 listenport=3000 listenaddress=0.0.0.0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 dark:bg-blue-900/20 dark:border-blue-500/70 p-4 mt-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700 dark:text-blue-200">
                    <strong>Mirrored mode tip:</strong> With <code className="bg-blue-100 dark:bg-blue-800/40 px-1 py-0.5 rounded text-xs">networkingMode=mirrored</code>,
                    port forwarding is unnecessary — WSL services bind directly to the host network interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DNS Configuration */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">DNS Configuration</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              By default, WSL auto-generates <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">/etc/resolv.conf</code> on every
              start. You can customize DNS behaviour in two ways.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Option 1: Custom DNS via wsl.conf</h3>
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">/etc/wsl.conf</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Prevent WSL from overwriting resolv.conf</div>
                  <div className="text-emerald-300">[network]</div>
                  <div className="text-white">generateResolvConf = false</div>
                </div>
              </div>
            </div>

            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">Ubuntu (WSL)</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Remove the auto-generated symlink and create your own</div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ sudo rm /etc/resolv.conf</span>
                  </div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">{`$ echo -e "nameserver 1.1.1.1\\nnameserver 8.8.8.8" | sudo tee /etc/resolv.conf`}</span>
                  </div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ sudo chattr +i /etc/resolv.conf</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Option 2: DNS Tunneling (Recommended)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              DNS tunneling routes DNS queries through the Windows host, which works well with corporate proxies and VPNs.
            </p>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">.wslconfig</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-emerald-300">[wsl2]</div>
                  <div className="text-white">dnsTunneling=true</div>
                </div>
              </div>
            </div>
          </div>

          {/* VPN Compatibility */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">VPN Compatibility</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              VPNs can break WSL networking because they modify routing tables and DNS settings on the Windows host.
              Here are proven strategies to keep connectivity working.
            </p>

            <div className="space-y-4">
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-5">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Strategy 1: Use Mirrored Networking</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Mirrored mode lets WSL share the VPN tunnel directly. Enable <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">networkingMode=mirrored</code> and <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">dnsTunneling=true</code> in
                  your <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">.wslconfig</code>. This is the recommended approach for corporate VPNs.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-5">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Strategy 2: Fix Interface Metrics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  If the VPN client raises its interface metric above the WSL virtual switch, traffic gets misrouted.
                  Lower the VPN adapter metric in PowerShell:
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
                      <div>
                        <span className="text-blue-400">PS&gt;</span>
                        <span className="text-white ml-2">Get-NetAdapter | Where-Object {'{'}$_.InterfaceDescription -like &quot;*VPN*&quot;{'}'} | Set-NetIPInterface -InterfaceMetric 6000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-5">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Strategy 3: Route DNS Through the VPN</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Enable <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">dnsTunneling=true</code> so all DNS queries go through the Windows resolver,
                  which already uses the VPN&#39;s DNS servers. Combine with <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">autoProxy=true</code> to
                  inherit proxy settings automatically.
                </p>
              </div>
            </div>
          </div>

          {/* Mirrored Networking Deep Dive */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Mirrored Networking Mode</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Mirrored mode was introduced to solve the most common networking pain points in WSL&nbsp;2.
              Here is a complete configuration with all related settings.
            </p>

            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">%USERPROFILE%\.wslconfig</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-emerald-300">[wsl2]</div>
                  <div className="text-white">networkingMode=mirrored</div>
                  <div className="text-white">dnsTunneling=true</div>
                  <div className="text-white">autoProxy=true</div>
                  <div className="text-white">firewall=true</div>
                  <div className="text-white mt-2"># Exclude specific ports from mirroring if needed</div>
                  <div className="text-emerald-300 mt-2">[experimental]</div>
                  <div className="text-white">ignoredPorts=8080,9090</div>
                  <div className="text-white">hostAddressLoopback=true</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 dark:bg-yellow-900/30 dark:border-yellow-500/70 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700 dark:text-yellow-200">
                    <strong>Note:</strong> Mirrored mode requires Windows 11 22H2 or later. After changing the networking mode,
                    restart WSL with <code className="bg-yellow-100 dark:bg-yellow-800/40 px-1 py-0.5 rounded text-xs">wsl --shutdown</code> for
                    the change to take effect.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Network Troubleshooting */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Quick Troubleshooting</h2>
            <div className="space-y-4">
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-5">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">No internet in WSL</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Check DNS: <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">cat /etc/resolv.conf</code>. If the nameserver points to an
                  unreachable IP, enable <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">dnsTunneling=true</code> or switch to mirrored mode.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-5">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Port not accessible from Windows</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Make sure your service binds to <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">0.0.0.0</code> instead of <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">127.0.0.1</code>.
                  If using NAT mode, verify localhost forwarding is not disabled in <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">.wslconfig</code>.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-5">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">WSL IP changes on restart</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  In NAT mode the WSL virtual network gets a dynamic IP. Use mirrored mode for a stable IP, or script
                  the port proxy update with <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-xs">wsl hostname -I</code> at startup.
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="card">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/security" className="block p-6 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Security Hardening</h3>
                <p className="text-gray-600 dark:text-gray-300">Lock down your WSL network with firewall rules and SSH hardening.</p>
              </Link>
              <Link href="/configuration" className="block p-6 bg-blue-50 dark:bg-wsl-blue/10 rounded-lg hover:bg-blue-100 dark:hover:bg-wsl-blue/20 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Configuration</h3>
                <p className="text-gray-600 dark:text-gray-300">Tune .wslconfig for memory, networking, and disk performance.</p>
              </Link>
              <Link href="/gpu-ai" className="block p-6 bg-purple-50 dark:bg-purple-900/30 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">GPU &amp; AI</h3>
                <p className="text-gray-600 dark:text-gray-300">Expose Jupyter and model endpoints using the networking tips from this guide.</p>
              </Link>
              <Link href="/troubleshooting" className="block p-6 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Troubleshooting</h3>
                <p className="text-gray-600 dark:text-gray-300">More solutions for common WSL issues beyond networking.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
