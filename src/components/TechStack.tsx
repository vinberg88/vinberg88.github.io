export default function TechStack() {
  const technologies = [
    {
      category: 'Linux Distributions',
      items: [
        { name: 'Ubuntu', icon: '🟠', description: 'Most popular choice with excellent package management' },
        { name: 'Debian', icon: '🔴', description: 'Stable and reliable base for many distributions' },
        { name: 'Kali Linux', icon: '🔵', description: 'Perfect for security testing and penetration testing' },
        { name: 'Alpine', icon: '⚪', description: 'Lightweight and security-oriented distribution' },
      ],
    },
    {
      category: 'Development Tools',
      items: [
        { name: 'VS Code', icon: '💙', description: 'Full-featured IDE with WSL remote development' },
        { name: 'Git', icon: '🟡', description: 'Version control that works seamlessly across systems' },
        { name: 'Docker', icon: '🐋', description: 'Container platform with native WSL2 integration' },
        { name: 'Node.js', icon: '🟢', description: 'JavaScript runtime for modern web development' },
      ],
    },
    {
      category: 'Programming Languages',
      items: [
        { name: 'Python', icon: '🐍', description: 'Data science, AI, and web development' },
        { name: 'JavaScript/TypeScript', icon: '📜', description: 'Web development and modern applications' },
        { name: 'Go', icon: '🐹', description: 'Fast, compiled language for system programming' },
        { name: 'Rust', icon: '🦀', description: 'System programming with memory safety' },
      ],
    },
    {
      category: 'DevOps & Cloud',
      items: [
        { name: 'Kubernetes', icon: '☸️', description: 'Container orchestration platform' },
        { name: 'Terraform', icon: '🏗️', description: 'Infrastructure as code tool' },
        { name: 'AWS CLI', icon: '☁️', description: 'Amazon Web Services command line interface' },
        { name: 'Azure CLI', icon: '🔷', description: 'Microsoft Azure command line tools' },
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Your WSL Toolkit</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            WSL supports a vast ecosystem of tools, languages, and frameworks. Build anything from web applications to
            machine learning models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((category) => (
            <div
              key={category.category}
              className="bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-lg shadow-gray-900/5 dark:shadow-black/30"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">{category.category}</h3>
              <ul className="space-y-5">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.name}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-wsl-blue to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">And Much More!</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            WSL supports virtually any Linux application or tool. If it runs on Linux, it runs on WSL. Explore the endless
            possibilities of cross-platform development.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Vim', 'Emacs', 'tmux', 'zsh', 'fish', 'gcc', 'make', 'cmake', 'nginx', 'apache2'].map((tool) => (
              <span key={tool} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}