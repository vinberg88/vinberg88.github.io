export default function ToolsPage() {
  const tools = [
    {
      category: "Development Tools",
      items: [
        { name: "Visual Studio Code", description: "Perfect IDE for WSL development", link: "https://code.visualstudio.com/" },
        { name: "Git", description: "Version control system", link: "https://git-scm.com/" },
        { name: "Docker", description: "Container platform", link: "https://www.docker.com/" },
        { name: "Node.js", description: "JavaScript runtime", link: "https://nodejs.org/" },
      ]
    },
    {
      category: "Terminal & Shell",
      items: [
        { name: "Windows Terminal", description: "Modern terminal for Windows", link: "https://aka.ms/terminal" },
        { name: "Zsh + Oh My Zsh", description: "Enhanced shell experience", link: "https://ohmyz.sh/" },
        { name: "tmux", description: "Terminal multiplexer", link: "https://github.com/tmux/tmux" },
        { name: "neovim", description: "Modern Vim editor", link: "https://neovim.io/" },
      ]
    },
    {
      category: "Languages & Runtimes",
      items: [
        { name: "Python", description: "Popular programming language", link: "https://www.python.org/" },
        { name: "Go", description: "Fast compiled language", link: "https://golang.org/" },
        { name: "Rust", description: "Systems programming language", link: "https://www.rust-lang.org/" },
        { name: "Java", description: "Enterprise programming language", link: "https://openjdk.java.net/" },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Essential WSL Tools
          </h1>
          <p className="text-xl text-indigo-100">
            Discover the best tools and applications for WSL development.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {tools.map((category, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {category.items.map((tool, toolIndex) => (
                  <div key={toolIndex} className="card hover:shadow-lg hover:shadow-wsl-blue/20 transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{tool.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Learn More →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}