import Link from 'next/link'

export default function QuickStart() {
  const steps = [
    {
      number: '1',
      title: 'Enable WSL',
      description: 'Open PowerShell as Administrator and run the installation command',
      command: 'wsl --install',
      details: 'This will enable the required features and install Ubuntu by default.'
    },
    {
      number: '2',
      title: 'Restart & Setup',
      description: 'Restart your computer and complete the Ubuntu setup',
      command: 'sudo apt update && sudo apt upgrade',
      details: 'Create your user account and update the system packages.'
    },
    {
      number: '3',
      title: 'Install Tools',
      description: 'Install your favorite development tools and languages',
      command: 'sudo apt install git nodejs npm python3 pip',
      details: 'Get your development environment ready with essential tools.'
    },
    {
      number: '4',
      title: 'VS Code Setup',
      description: 'Install VS Code and the Remote-WSL extension',
      command: 'code .',
      details: 'Open your WSL workspace directly in VS Code for seamless development.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Start Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get up and running with WSL in just a few minutes. Follow these simple steps 
            to transform your Windows development environment.
          </p>
        </div>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-wsl-blue text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {step.description}
                </p>
                <p className="text-sm text-gray-500">
                  {step.details}
                </p>
              </div>
              
              <div className="flex-shrink-0 w-full lg:w-auto">
                <div className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                  </div>
                  <div className="terminal-content">
                    <div className="flex items-center space-x-2">
                      <span className="text-wsl-green">$</span>
                      <span className="text-white font-mono text-sm">{step.command}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/installation"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View Detailed Installation Guide</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}