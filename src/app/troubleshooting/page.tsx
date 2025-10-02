export default function TroubleshootingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            WSL Troubleshooting Guide
          </h1>
          <p className="text-xl text-red-100">
            Common issues and solutions for Windows Subsystem for Linux problems.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Installation Issues</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Error: "The Windows Subsystem for Linux optional component is not enabled"
                </h3>
                <p className="text-gray-700 mb-4">Enable WSL feature manually:</p>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
                </div>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Error: "WSL 2 requires an update to its kernel component"
                </h3>
                <p className="text-gray-700 mb-4">Download and install the WSL2 Linux kernel update package from Microsoft.</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Error: "Please enable the Virtual Machine Platform Windows feature"
                </h3>
                <p className="text-gray-700 mb-4">Enable Virtual Machine Platform:</p>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Performance Issues</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Slow File Operations</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-yellow-800">
                    <strong>Solution:</strong> Store your project files in the Linux file system 
                    (<code>/home/username/</code>) instead of the Windows file system (<code>/mnt/c/</code>).
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">High Memory Usage</h3>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-blue-800">
                    <strong>Solution:</strong> Configure memory limits in <code>.wslconfig</code> file:
                  </p>
                  <div className="mt-2 bg-gray-900 text-gray-100 p-2 rounded text-sm font-mono">
                    [wsl2]<br/>
                    memory=4GB
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Network Issues</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cannot Access Internet</h3>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <p className="text-green-800">
                    <strong>Solution:</strong> Check DNS configuration in <code>/etc/resolv.conf</code>:
                  </p>
                  <div className="mt-2 bg-gray-900 text-gray-100 p-2 rounded text-sm font-mono">
                    nameserver 8.8.8.8<br/>
                    nameserver 1.1.1.1
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