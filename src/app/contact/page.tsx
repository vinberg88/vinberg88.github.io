import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact WSL Guide
          </h1>
          <p className="text-xl text-blue-100">
            Have questions about WSL? Need help with setup? Want to contribute? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
          
          {/* Alternative Contact Methods */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0v10a2 2 0 002 2h6a2 2 0 002-2V8M9 12h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub Issues</h3>
              <p className="text-gray-600 mb-4">Report bugs, request features, or contribute to the project.</p>
              <a
                href="https://github.com/vinberg88/vinberg88.github.io/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Open Issue →
              </a>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8V4a2 2 0 012-2v4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Discussion</h3>
              <p className="text-gray-600 mb-4">Join the WSL community on Reddit for discussions and help.</p>
              <a
                href="https://reddit.com/r/bashonubuntuonwindows"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Join Discussion →
              </a>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Official Docs</h3>
              <p className="text-gray-600 mb-4">Check the official Microsoft WSL documentation first.</p>
              <a
                href="https://docs.microsoft.com/en-us/windows/wsl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Docs →
              </a>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16">
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How quickly do you respond to messages?
                  </h3>
                  <p className="text-gray-600">
                    We typically respond within 24-48 hours. For urgent technical issues, 
                    consider posting on the WSL GitHub repository or Reddit community for faster community support.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can you help with specific WSL errors?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely! When reporting errors, please include your Windows version, 
                    WSL version, Linux distribution, and the complete error message for the best help.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How can I contribute to WSL Guide?
                  </h3>
                  <p className="text-gray-600">
                    We welcome contributions! You can submit pull requests on GitHub, 
                    suggest content improvements, report issues, or share your WSL tips and tricks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}