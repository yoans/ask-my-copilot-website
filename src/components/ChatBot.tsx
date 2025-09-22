'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  id: string
  content: string
  type: 'user' | 'bot'
  timestamp: Date
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "👋 Hi! I'm your AI assistant. I can help you with agent setup, troubleshooting, API configurations, and answer any questions about our platform. How can I help you today?",
      type: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Simulate AI responses (in a real implementation, this would call an API)
  const getAIResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('setup') || lowerMessage.includes('start')) {
      return "Great! Let me help you get started. Here are the basic steps:\n\n1. Choose your agent type from our gallery\n2. Configure your API keys (OpenAI, data sources, etc.)\n3. Deploy using Docker or our cloud platform\n4. Monitor and optimize performance\n\nWhich step would you like help with? 🚀"
    }
    
    if (lowerMessage.includes('api') || lowerMessage.includes('key')) {
      return "For API key setup:\n\n🔑 **OpenAI API**: Get your key from platform.openai.com\n📊 **Data Sources**: We support Google Sheets, Airtable, SQL databases\n🔐 **Security**: All keys are encrypted using AES-256\n\nNeed help with a specific API integration? Just let me know which service! 💡"
    }
    
    if (lowerMessage.includes('docker') || lowerMessage.includes('deploy')) {
      return "Docker deployment is super easy! 🐳\n\n```bash\ndocker run -d --name my-agent \\\n  -e OPENAI_API_KEY=your_key \\\n  -e DATA_SOURCE_URL=your_url \\\n  askmy/copilot-agent:latest\n```\n\nOr use our one-click cloud deployment. Would you like me to walk you through either option?"
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('free')) {
      return "We have flexible pricing options! 💰\n\n• **Free tier**: Basic agents, community support\n• **Pro ($29/month)**: Unlimited agents, premium workshops\n• **Enterprise**: Custom solutions\n\nPlus prebuilt Docker images ($39-59) and expert workshops ($99-199). What interests you most?"
    }
    
    if (lowerMessage.includes('workshop') || lowerMessage.includes('training')) {
      return "Our workshops are fantastic! 🎓\n\n📚 **Available workshops**:\n• AI Agent Fundamentals (Beginner) - $99\n• Advanced Agent Architecture - $199\n• Enterprise AI Deployment - $149\n\nAll include live Q&A, hands-on practice, and completion certificates. Which level interests you?"
    }
    
    if (lowerMessage.includes('error') || lowerMessage.includes('problem') || lowerMessage.includes('help')) {
      return "I'm here to help troubleshoot! 🛠️\n\nCommon issues:\n• **Agent not starting**: Check API key configuration\n• **Slow responses**: Increase memory allocation\n• **Connection errors**: Verify network access\n\nCan you describe the specific error you're seeing? Include any error messages if possible."
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! Welcome to Ask My Copilot! 👋\n\nI can help you with:\n• Setting up AI agents\n• API configuration\n• Deployment options\n• Troubleshooting\n• Workshop recommendations\n\nWhat would you like to explore first? 🤖"
    }
    
    // Default response
    return "Thanks for your question! I'm designed to help with AI agent setup, deployment, troubleshooting, and platform features. Could you rephrase your question or ask about:\n\n• Agent setup process\n• API integrations\n• Docker deployment\n• Pricing options\n• Workshop details\n• Technical support\n\nWhat specific topic can I help you with? 🤔"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(async () => {
      const response = await getAIResponse(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        type: 'bot',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickActions = [
    "How do I set up my first agent?",
    "What API keys do I need?",
    "Show me deployment options",
    "Help with troubleshooting"
  ]

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 z-50 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[32rem] bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-primary-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs opacity-80">Online • Usually replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-primary-700 rounded p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {message.content}
                  </div>
                  <div className={`text-xs mt-1 opacity-70 ${
                    message.type === 'user' ? 'text-primary-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
              <div className="space-y-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(action)}
                    className="w-full text-left text-sm p-2 bg-gray-50 hover:bg-gray-100 rounded transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}