export default function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Guided Setup Process',
      description: 'Step-by-step instructions to set up any type of AI agent, from data analysis to content creation.',
      benefits: ['Interactive tutorials', 'Video walkthroughs', 'Real-time validation']
    },
    {
      icon: '🔑',
      title: 'Automated API Integration',
      description: 'Agents automatically set up their own access to services, obtain API keys, and configure connections.',
      benefits: ['Self-service setup', 'Secure key management', 'Multiple provider support']
    },
    {
      icon: '🐳',
      title: 'Prebuilt Docker Images',
      description: 'Ready-to-deploy containers with specialized agents for common use cases.',
      benefits: ['One-click deployment', 'Production ready', 'Scalable infrastructure']
    },
    {
      icon: '🎓',
      title: 'Expert Workshops',
      description: 'Live training sessions and recorded workshops from AI automation experts.',
      benefits: ['Live Q&A sessions', 'Hands-on practice', 'Certificate completion']
    },
    {
      icon: '🤖',
      title: 'AI Assistant Chat',
      description: 'Get instant help from our AI chatbot that understands agent setup and troubleshooting.',
      benefits: ['24/7 availability', 'Context-aware help', 'Code generation']
    },
    {
      icon: '💰',
      title: 'Flexible Pricing',
      description: 'Support the platform with donations, pay for premium features, or access enterprise solutions.',
      benefits: ['Free tier available', 'Pay-as-you-go', 'Enterprise discounts']
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Build AI Agents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides comprehensive tools and guidance to help you create, 
            deploy, and manage AI agents that solve real business problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-500">
                    <span className="text-green-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of developers who are already building amazing AI agents
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              Start Building Now
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}