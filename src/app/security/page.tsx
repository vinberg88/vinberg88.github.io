import Link from 'next/link'

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-rose-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Security Hardening
          </h1>
          <p className="text-xl text-red-100">
            Lock down your WSL environment with firewall rules, SSH hardening, secrets management, and Windows Defender integration.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Firewall Rules */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Firewall Rules for WSL</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              WSL&nbsp;2 traffic passes through the Windows Firewall. You can control inbound and outbound access with
              standard firewall rules and the new Hyper-V firewall feature.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Enable WSL Firewall in .wslconfig</h3>
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">.wslconfig</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-emerald-300">[wsl2]</div>
                  <div className="text-white">firewall=true</div>
                  <div className="text-gray-400 mt-2"># Hyper-V firewall lets you write rules specifically for WSL traffic</div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Block Inbound Connections to WSL</h3>
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">PowerShell (Admin)</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Block all inbound traffic to WSL except SSH</div>
                  <div>
                    <span className="text-blue-400">PS&gt;</span>
                    <span className="text-white ml-2">New-NetFirewallHyperVRule -Name &quot;BlockWSLInbound&quot; -Direction Inbound -Action Block -VMCreatorId &apos;{'{'}40E0AC32-46A5-438A-A0B2-2B479E8F2E90{'}'}&apos;</span>
                  </div>
                  <div className="mt-2 text-gray-400"># Allow SSH specifically</div>
                  <div>
                    <span className="text-blue-400">PS&gt;</span>
                    <span className="text-white ml-2">New-NetFirewallHyperVRule -Name &quot;AllowWSLSSH&quot; -Direction Inbound -Action Allow -LocalPort 22 -Protocol TCP -VMCreatorId &apos;{'{'}40E0AC32-46A5-438A-A0B2-2B479E8F2E90{'}'}&apos;</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Linux-side Firewall with UFW</h3>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">Ubuntu (WSL)</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Install and enable UFW</div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ sudo apt install ufw</span>
                  </div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ sudo ufw default deny incoming</span>
                  </div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ sudo ufw default allow outgoing</span>
                  </div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ sudo ufw allow 2222/tcp</span>
                  </div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ sudo ufw enable</span>
                  </div>
                  <div className="text-emerald-300">Firewall is active and enabled on system startup</div>
                </div>
              </div>
            </div>
          </div>

          {/* SSH Hardening */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">SSH Hardening</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              If you run an SSH server inside WSL for remote access, harden it beyond the defaults.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Generate Strong SSH Keys</h3>
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">Ubuntu (WSL)</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Generate an Ed25519 key (fast, secure, small)</div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ ssh-keygen -t ed25519 -C &quot;your_email@example.com&quot;</span>
                  </div>
                  <div className="mt-2 text-gray-400"># Set correct permissions</div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ chmod 700 ~/.ssh &amp;&amp; chmod 600 ~/.ssh/id_ed25519</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Harden sshd_config</h3>
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">/etc/ssh/sshd_config</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Disable password authentication — use keys only</div>
                  <div className="text-white">PasswordAuthentication no</div>
                  <div className="text-white">PubkeyAuthentication yes</div>
                  <div className="text-white mt-2">PermitRootLogin no</div>
                  <div className="text-white">MaxAuthTries 3</div>
                  <div className="text-white">LoginGraceTime 30</div>
                  <div className="text-white mt-2"># Only allow specific users</div>
                  <div className="text-white">AllowUsers your_username</div>
                  <div className="text-white mt-2"># Use a non-standard port to reduce noise</div>
                  <div className="text-white">Port 2222</div>
                  <div className="text-white mt-2"># Disable unused authentication methods</div>
                  <div className="text-white">ChallengeResponseAuthentication no</div>
                  <div className="text-white">UsePAM no</div>
                </div>
              </div>
            </div>

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">Ubuntu (WSL)</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Restart SSH to apply changes</div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ sudo service ssh restart</span>
                  </div>
                  <div className="mt-2 text-gray-400"># Auto-start SSH when WSL boots</div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">{`$ echo '[boot]' | sudo tee -a /etc/wsl.conf`}</span>
                  </div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">{`$ echo 'command = service ssh start' | sudo tee -a /etc/wsl.conf`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secrets Management */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Secrets Management</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Never store secrets in plain text inside WSL. Use credential helpers and environment isolation to keep
              tokens, API keys, and passwords safe.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Git Credential Manager</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Use Windows Credential Manager from inside WSL so tokens are stored in the encrypted Windows vault.
                </p>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-gray-300 text-sm">Ubuntu (WSL)</span>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-2">
                      <div className="text-gray-400"># Use Git Credential Manager from Windows</div>
                      <div>
                        <span className="text-wsl-green">user@wsl</span>
                        <span className="text-blue-300">:</span>
                        <span className="text-blue-400">~</span>
                        <span className="text-white">$ git config --global credential.helper &quot;/mnt/c/Program Files/Git/mingw64/bin/git-credential-manager.exe&quot;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Environment Variable Isolation</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Prevent Windows environment variables from leaking into WSL by controlling the <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">WSLENV</code> variable
                  and the interop settings.
                </p>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-gray-300 text-sm">/etc/wsl.conf</span>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-2">
                      <div className="text-emerald-300">[interop]</div>
                      <div className="text-white">enabled = true</div>
                      <div className="text-white">appendWindowsPath = false</div>
                      <div className="text-gray-400 mt-2"># Only expose specific Windows paths you need</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">SSH Agent Forwarding</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Share your Windows SSH keys with WSL securely using 1Password, the Windows SSH agent, or <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">keychain</code>.
                </p>
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="ml-4 text-gray-300 text-sm">Ubuntu (WSL)</span>
                  </div>
                  <div className="terminal-content">
                    <div className="space-y-2">
                      <div className="text-gray-400"># Install keychain for persistent SSH agent</div>
                      <div>
                        <span className="text-wsl-green">user@wsl</span>
                        <span className="text-blue-300">:</span>
                        <span className="text-blue-400">~</span>
                        <span className="text-white">$ sudo apt install keychain</span>
                      </div>
                      <div className="mt-2 text-gray-400"># Add to your .bashrc</div>
                      <div>
                        <span className="text-wsl-green">user@wsl</span>
                        <span className="text-blue-300">:</span>
                        <span className="text-blue-400">~</span>
                        <span className="text-white">{`$ echo 'eval $(keychain --eval --agents ssh id_ed25519)' >> ~/.bashrc`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Windows Defender + WSL */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Windows Defender &amp; WSL</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Windows Defender can scan WSL file systems, but this can slow down build processes. Balance security
              with performance using targeted exclusions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Add Performance Exclusions</h3>
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">PowerShell (Admin)</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Exclude WSL virtual disk from real-time scanning</div>
                  <div>
                    <span className="text-blue-400">PS&gt;</span>
                    <span className="text-white ml-2">Add-MpPreference -ExclusionPath &quot;$env:LOCALAPPDATA\Packages\CanonicalGroupLimited*&quot;</span>
                  </div>
                  <div className="mt-2 text-gray-400"># Exclude common build tool processes</div>
                  <div>
                    <span className="text-blue-400">PS&gt;</span>
                    <span className="text-white ml-2">Add-MpPreference -ExclusionProcess &quot;node.exe&quot;, &quot;python3&quot;, &quot;cargo&quot;, &quot;rustc&quot;</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 dark:bg-yellow-900/30 dark:border-yellow-500/70 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700 dark:text-yellow-200">
                    <strong>Security trade-off:</strong> Only add exclusions for build directories you trust. Never exclude
                    your entire WSL filesystem — keep Defender scanning downloads and untrusted files.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Enable Microsoft Defender for Linux (Enterprise)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              For enterprise environments, Microsoft Defender for Endpoint can run inside WSL to provide real-time
              protection within the Linux filesystem.
            </p>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="ml-4 text-gray-300 text-sm">Ubuntu (WSL)</span>
              </div>
              <div className="terminal-content">
                <div className="space-y-2">
                  <div className="text-gray-400"># Install Microsoft Defender for Endpoint (requires enterprise license)</div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ curl -o microsoft.list https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/prod.list</span>
                  </div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ sudo mv microsoft.list /etc/apt/sources.list.d/</span>
                  </div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ sudo apt update &amp;&amp; sudo apt install mdatp</span>
                  </div>
                  <div className="mt-2 text-gray-400"># Verify status</div>
                  <div>
                    <span className="text-wsl-green">user@wsl</span>
                    <span className="text-blue-300">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ mdatp health --field healthy</span>
                  </div>
                  <div className="text-emerald-300">true</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Checklist */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Security Checklist</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Quick reference for hardening a fresh WSL installation.
            </p>
            <div className="space-y-3">
              {[
                'Keep Windows and WSL kernel updated (wsl --update)',
                'Disable password authentication for SSH — use key-based auth',
                'Set appendWindowsPath = false to limit path exposure',
                'Use Git Credential Manager instead of storing tokens in dotfiles',
                'Enable firewall=true in .wslconfig',
                'Add Defender exclusions only for trusted build directories',
                'Run regular package updates: sudo apt update && sudo apt upgrade',
                'Audit open ports: ss -tlnp inside WSL',
                'Use separate WSL distros for different trust levels',
              ].map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="card">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/networking" className="block p-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Networking Deep Dive</h3>
                <p className="text-gray-600 dark:text-gray-300">Configure networking modes and port forwarding securely.</p>
              </Link>
              <Link href="/wsl-pro" className="block p-6 bg-blue-50 dark:bg-wsl-blue/10 rounded-lg hover:bg-blue-100 dark:hover:bg-wsl-blue/20 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Enterprise Playbook</h3>
                <p className="text-gray-600 dark:text-gray-300">Governance, compliance, and rollout strategies for enterprise WSL.</p>
              </Link>
              <Link href="/best-practices" className="block p-6 bg-green-50 dark:bg-green-900/30 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Best Practices</h3>
                <p className="text-gray-600 dark:text-gray-300">General tips for keeping your WSL environment clean and efficient.</p>
              </Link>
              <Link href="/troubleshooting" className="block p-6 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Troubleshooting</h3>
                <p className="text-gray-600 dark:text-gray-300">Fix common security-related issues and permission errors.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
