'use client'

import { useState, ChangeEvent, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

type SubmitStatus = 'success' | 'error' | null

const parseResponseBody = async (response: Response): Promise<unknown> => {
  const contentType = response.headers.get('content-type')

  if (contentType?.toLowerCase().includes('application/json')) {
    try {
      return await response.json()
    } catch (error) {
      console.warn('Failed to parse JSON response', error)
      return null
    }
  }

  try {
    return await response.text()
  } catch (error) {
    console.warn('Failed to read response as text', error)
    return null
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null)
  const [errorDetails, setErrorDetails] = useState<string | null>(null)
  const [successDetails, setSuccessDetails] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorDetails(null)
    setSuccessDetails(null)

    try {
      const endpoints: string[] = []
      const configuredEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim()

      if (configuredEndpoint) {
        endpoints.push(configuredEndpoint)
      }

      if (!endpoints.includes('/api/contact')) {
        endpoints.push('/api/contact')
      }

      let lastErrorMessage = ''

      for (const endpoint of endpoints) {
        const isExternal = endpoint.startsWith('http')
        const headers: HeadersInit = {
          'Content-Type': 'application/json',
        }

        if (isExternal) {
          headers['Accept'] = 'application/json'
        }

        const payload = {
          ...formData,
          userAgent: navigator.userAgent,
          _subject: `WSL Guide Contact: ${formData.subject}`,
          _replyto: formData.email,
          _template: 'table',
        }

        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers,
            body: JSON.stringify(payload),
          })

          if (response.ok) {
            const responseBody = await parseResponseBody(response)
            const successMessage =
              (typeof responseBody === 'object' && responseBody !== null && 'message' in responseBody
                ? String((responseBody as Record<string, unknown>).message)
                : typeof responseBody === 'string' && responseBody.trim().length > 0
                  ? responseBody
                  : null) ?? 'Message sent successfully!'

            setSubmitStatus('success')
            setSuccessDetails(successMessage)
            setFormData({ name: '', email: '', subject: '', message: '' })
            return
          }

          const responseBody = await parseResponseBody(response)
          const errorMessage =
            (typeof responseBody === 'object' && responseBody !== null && 'error' in responseBody
              ? String((responseBody as Record<string, unknown>).error)
              : typeof responseBody === 'object' && responseBody !== null && 'message' in responseBody
                ? String((responseBody as Record<string, unknown>).message)
                : typeof responseBody === 'string' && responseBody.trim().length > 0
                  ? responseBody
                  : `${response.status} ${response.statusText}`)

          lastErrorMessage = errorMessage
        } catch (error) {
          lastErrorMessage = error instanceof Error ? error.message : 'Unknown error during submission'
        }
      }

      setErrorDetails(lastErrorMessage || 'Unable to send your message right now. Please try again later.')
      setSubmitStatus('error')
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrorDetails(error instanceof Error ? error.message : 'Unknown error during submission')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Get in Touch</h2>
        
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400 dark:bg-green-900/30 dark:border-green-500/70">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800 dark:text-green-200">Message sent successfully!</h3>
                <div className="mt-2 text-sm text-green-700 dark:text-green-200/80">
                  <p>{successDetails ?? "Thank you for your message. We'll get back to you soon!"}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 dark:bg-red-900/30 dark:border-red-500/70">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800 dark:text-red-200">Error sending message</h3>
                <div className="mt-2 text-sm text-red-700 dark:text-red-200/80">
                  <p>There was a problem sending your message. Please try again or contact us directly.</p>
                  {errorDetails && <p className="mt-2 text-xs text-red-600 dark:text-red-300/80">Details: {errorDetails}</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900/60 text-gray-900 dark:text-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-wsl-blue focus:border-wsl-blue"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900/60 text-gray-900 dark:text-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-wsl-blue focus:border-wsl-blue"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900/60 text-gray-900 dark:text-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-wsl-blue focus:border-wsl-blue"
              placeholder="What's this about?"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900/60 text-gray-900 dark:text-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-wsl-blue focus:border-wsl-blue"
              placeholder="Tell us more about your question or feedback..."
            />
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full md:w-auto flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 text-center">
        <div className="terminal-window max-w-md mx-auto">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500"></div>
            <div className="terminal-dot bg-yellow-500"></div>
            <div className="terminal-dot bg-green-500"></div>
            <span className="ml-4 text-gray-300 text-sm">bash</span>
          </div>
          <div className="terminal-content">
            <div className="space-y-1 text-sm">
              <div>
                <span className="text-wsl-green">user@wsl-guide</span>
                <span className="text-blue-300">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$ echo "Thanks for reaching out!"</span>
              </div>
              <div className="text-gray-300">Thanks for reaching out!</div>
              <div>
                <span className="text-wsl-green">user@wsl-guide</span>
                <span className="text-blue-300">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$ mail --status</span>
              </div>
              <div className="text-green-400">✓ Ready to receive your message</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}