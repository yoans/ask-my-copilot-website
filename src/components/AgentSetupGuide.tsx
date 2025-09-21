'use client'

import { useState } from 'react'

export default function AgentSetupGuide() {
  const [activeStep, setActiveStep] = useState(0)
  const [selectedAgentType, setSelectedAgentType] = useState('data-analyst')

  const agentTypes = [
    { id: 'data-analyst', name: 'Data Analyst', icon: '📊', description: 'Analyze data and generate insights' },
    { id: 'content-creator', name: 'Content Creator', icon: '✍️', description: 'Generate and optimize content' },
    { id: 'customer-support', name: 'Customer Support', icon: '🎧', description: 'Handle customer inquiries' },
    { id: 'code-reviewer', name: 'Code Reviewer', icon: '🔍', description: 'Review and improve code quality' },
    { id: 'social-media', name: 'Social Media Manager', icon: '📱', description: 'Manage social media presence' },
    { id: 'research-assistant', name: 'Research Assistant', icon: '🔬', description: 'Conduct research and summarize findings' }
  ]

  const setupSteps = [
    {
      title: 'Choose Your Agent Type',
      description: 'Select the type of AI agent that best fits your needs',
      content: (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agentTypes.map((agent) => (
            <div
              key={agent.id}
              onClick={() => setSelectedAgentType(agent.id)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selectedAgentType === agent.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-2">{agent.icon}</div>
              <h4 className="font-semibold text-gray-900 mb-1">{agent.name}</h4>
              <p className="text-sm text-gray-600">{agent.description}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'Configure API Access',
      description: 'Set up API keys and service connections your agent will need',
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Required API Keys:</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded border">
                <div className="flex items-center">
                  <span className="text-lg mr-3">🤖</span>
                  <div>
                    <div className="font-medium">OpenAI API</div>
                    <div className="text-sm text-gray-500">For AI processing and generation</div>
                  </div>
                </div>
                <button className="btn-primary text-sm py-1 px-3">Configure</button>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border">
                <div className="flex items-center">
                  <span className="text-lg mr-3">📊</span>
                  <div>
                    <div className="font-medium">Data Source API</div>
                    <div className="text-sm text-gray-500">Connect to your data sources</div>
                  </div>
                </div>
                <button className="btn-primary text-sm py-1 px-3">Configure</button>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h5 className="font-semibold text-blue-900 mb-2">🔒 Security Best Practices</h5>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• API keys are encrypted and stored securely</li>
              <li>• Use environment variables for sensitive data</li>
              <li>• Rotate keys regularly for maximum security</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'Deploy Your Agent',
      description: 'Choose how you want to deploy and run your AI agent',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">☁️</span>
                <h4 className="font-semibold">Cloud Deployment</h4>
              </div>
              <p className="text-gray-600 mb-4">Deploy to our managed cloud infrastructure</p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>✓ Auto-scaling</li>
                <li>✓ 99.9% uptime</li>
                <li>✓ Managed updates</li>
              </ul>
              <button className="btn-primary w-full">Deploy to Cloud</button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🐳</span>
                <h4 className="font-semibold">Docker Container</h4>
              </div>
              <p className="text-gray-600 mb-4">Download and run locally or on your infrastructure</p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>✓ Full control</li>
                <li>✓ On-premises</li>
                <li>✓ Custom scaling</li>
              </ul>
              <button className="btn-secondary w-full">Download Docker</button>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
            <div className="mb-2">$ docker run -d --name my-agent \\</div>
            <div className="ml-4 mb-2">-e OPENAI_API_KEY=your_key \\</div>
            <div className="ml-4 mb-2">-e DATA_SOURCE_URL=your_url \\</div>
            <div className="ml-4 mb-2">askmy/copilot-{selectedAgentType}</div>
            <div className="text-gray-400 mt-2">Agent starting up...</div>
            <div className="text-green-400">✓ Agent is running and ready!</div>
          </div>
        </div>
      )
    },
    {
      title: 'Monitor & Optimize',
      description: 'Track performance and optimize your agent for better results',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="text-2xl text-green-600 mb-2">✅</div>
              <div className="text-2xl font-bold text-green-600">98.5%</div>
              <div className="text-sm text-green-700">Success Rate</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <div className="text-2xl text-blue-600 mb-2">⚡</div>
              <div className="text-2xl font-bold text-blue-600">1.2s</div>
              <div className="text-sm text-blue-700">Avg Response</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <div className="text-2xl text-purple-600 mb-2">🔄</div>
              <div className="text-2xl font-bold text-purple-600">1,247</div>
              <div className="text-sm text-purple-700">Tasks Completed</div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Optimization Suggestions:</h4>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <span className="text-yellow-500 mr-2">💡</span>
                <span>Consider increasing memory allocation for better performance</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-blue-500 mr-2">🔧</span>
                <span>Update to the latest model version for improved accuracy</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-500 mr-2">📈</span>
                <span>Your agent is performing above average - great job!</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="setup-guide" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Setup Your AI Agent in 4 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our guided setup process makes it easy to create and deploy AI agents 
            that are tailored to your specific needs and requirements.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {setupSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg transition-colors ${
                    activeStep >= index
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {index + 1}
                </button>
                {index < setupSteps.length - 1 && (
                  <div className={`w-16 h-1 mx-2 ${
                    activeStep > index ? 'bg-primary-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {setupSteps[activeStep].title}
              </h3>
              <p className="text-gray-600">
                {setupSteps[activeStep].description}
              </p>
            </div>

            <div className="mb-8">
              {setupSteps[activeStep].content}
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setActiveStep(Math.min(setupSteps.length - 1, activeStep + 1))}
                disabled={activeStep === setupSteps.length - 1}
                className="btn-primary px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {activeStep === setupSteps.length - 1 ? 'Complete' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}