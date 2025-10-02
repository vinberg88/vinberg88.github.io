export default function Features() {
  const features = [
    {
      title: 'Easy Installation',
      description: 'Set up WSL with a single command. Get Ubuntu, Debian, or your favorite Linux distribution running in minutes.',
      icon: '⚡',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      title: 'Native Performance',
      description: 'Run Linux binaries natively on Windows with near-native performance. No virtual machine overhead.',
      icon: '🚀',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'File System Integration',
      description: 'Seamlessly access Windows files from Linux and Linux files from Windows. Work across both systems effortlessly.',
      icon: '📁',
      color: 'bg-green-100 text-green-800'
    },
    {
      title: 'Development Tools',
      description: 'Use your favorite Linux development tools, compilers, and utilities alongside Windows applications.',
      icon: '🛠️',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      title: 'VS Code Integration',
      description: 'Develop in WSL with full VS Code support. Remote development with IntelliSense, debugging, and extensions.',
      icon: '💻',
      color: 'bg-indigo-100 text-indigo-800'
    },
    {
      title: 'Docker & Containers',
      description: 'Run Docker containers natively in WSL2. Perfect for containerized development workflows.',
      icon: '🐳',
      color: 'bg-cyan-100 text-cyan-800'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose WSL?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Windows Subsystem for Linux brings the power of Linux to Windows developers, 
            offering the best of both worlds in a single environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}