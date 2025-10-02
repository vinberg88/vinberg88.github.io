export default function ResourcesPage() {
  const resources = [
    {
      category: "Official Documentation",
      items: [
        { name: "Microsoft WSL Docs", url: "https://docs.microsoft.com/en-us/windows/wsl/", description: "Official Microsoft documentation for WSL" },
        { name: "WSL GitHub Repository", url: "https://github.com/microsoft/WSL", description: "Official WSL source code and issue tracking" },
        { name: "WSL Release Notes", url: "https://docs.microsoft.com/en-us/windows/wsl/release-notes", description: "Latest updates and changes" },
      ]
    },
    {
      category: "Community Resources",
      items: [
        { name: "r/bashonubuntuonwindows", url: "https://reddit.com/r/bashonubuntuonwindows", description: "Active Reddit community" },
        { name: "WSL Discord", url: "https://discord.gg/VSTC4wa", description: "Community Discord server" },
        { name: "Stack Overflow", url: "https://stackoverflow.com/questions/tagged/windows-subsystem-for-linux", description: "Q&A platform for WSL questions" },
      ]
    },
    {
      category: "Learning Resources",
      items: [
        { name: "Microsoft Learn", url: "https://docs.microsoft.com/en-us/learn/modules/get-started-with-windows-subsystem-for-linux/", description: "Interactive learning modules" },
        { name: "WSL Tutorial Series", url: "https://www.youtube.com/results?search_query=wsl+tutorial", description: "YouTube video tutorials" },
        { name: "Linux Command Line", url: "https://linuxcommand.org/", description: "Learn Linux command line basics" },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            WSL Resources
          </h1>
          <p className="text-xl text-teal-100">
            External resources, documentation, and community links for WSL.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {resources.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.category}</h2>
              <div className="space-y-4">
                {section.items.map((resource, resourceIndex) => (
                  <div key={resourceIndex} className="card hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.name}</h3>
                        <p className="text-gray-600 mb-3">{resource.description}</p>
                      </div>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1"
                      >
                        <span>Visit</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
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