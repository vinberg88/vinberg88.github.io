import Link from 'next/link'

<Link
  href="https://github.com/vinberg88/opensuse/blob/main/Fedora42-KDE6.txt"
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
>
  Latest For WSL - FEDORA 42 and KDE 6
</Link>

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-wsl-blue to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Setup Windows Subsystem for Linux
          </h1>
      <div className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
  <a
    href="https://github.com/vinberg88/opensuse/blob/main/Fedora42-KDE6.txt"
    className="button"
    target="_blank"
    rel="noopener noreferrer"
  >
    Senaste projekt för WSl och Fedora 42
  </a>
  <img
    src="https://lh3.googleusercontent.com/a/ACg8ocIsVLpogTErfcIeG65iS3MKzgtHCIuaxuo2Te9BmkBYPVci96qs=s288-c-no"
    alt="Matias Vinberg"
    style={{ display: "block", margin: "1rem auto" }}
  />
  <div>
    Your comprehensive guide to WSL - from installation to advanced development workflows. 
    Learn how to seamlessly integrate Linux tools with Windows development.
  </div>
</div>
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/installation"
              className="bg-white text-wsl-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              Get Started
            </Link>
            <Link
              href="/configuration"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-wsl-blue transition-colors duration-200 text-lg"
            >
              Configuration Guide
            </Link>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="terminal-window max-w-4xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="ml-4 text-gray-300 text-sm">Ubuntu-22.04</span>
            </div>
            <div className="terminal-content">
              <div className="space-y-2">
                <div>
                  <span className="text-wsl-green">user@PC</span>
                  <span className="text-blue-300">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ wsl --install</span>
                </div>
                <div className="text-gray-300">Installing: Windows Subsystem for Linux</div>
                <div className="text-gray-300">Installing: Ubuntu</div>
                <div className="text-green-400">✓ Installation completed successfully!</div>
                <div>
                  <span className="text-wsl-green">user@PC</span>
                  <span className="text-blue-300">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ code .</span>
                </div>
                <div className="text-gray-300">Opening VS Code in WSL...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
