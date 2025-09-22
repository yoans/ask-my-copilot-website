'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
    alert('Thank you for signing up! We\'ll keep you updated on new features.')
  }

  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Powerful
              <span className="text-primary-600"> AI Agents</span>
              <br />
              That Work For You
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              The ultimate platform for setting up AI agents that automate your workflow. 
              Get step-by-step guidance, access premium workshops, and deploy prebuilt 
              Docker containers that handle complex tasks with just a few API keys.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="#setup-guide" className="btn-primary text-center px-8 py-3">
                Get Started Free
              </Link>
              <Link href="#pricing" className="btn-secondary text-center px-8 py-3">
                View Pricing
              </Link>
            </div>

            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for updates"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button type="submit" className="btn-primary px-6">
                Subscribe
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="bg-white rounded-xl shadow-2xl p-6">
              <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                <div className="mb-2">$ ask-my-copilot setup --agent-type="data-analyst"</div>
                <div className="text-gray-400">✓ Installing dependencies...</div>
                <div className="text-gray-400">✓ Configuring API keys...</div>
                <div className="text-gray-400">✓ Setting up automation...</div>
                <div className="text-green-400">✓ Agent ready! Starting analysis...</div>
                <div className="mt-2 text-blue-400">💡 Your AI agent is now analyzing your data!</div>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-primary-50 p-3 rounded-lg text-center">
                  <div className="text-2xl mb-1">🤖</div>
                  <div className="text-sm font-medium">Smart Agents</div>
                </div>
                <div className="bg-secondary-50 p-3 rounded-lg text-center">
                  <div className="text-2xl mb-1">⚡</div>
                  <div className="text-sm font-medium">Fast Setup</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <div className="text-2xl mb-1">🔧</div>
                  <div className="text-sm font-medium">Auto Config</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}