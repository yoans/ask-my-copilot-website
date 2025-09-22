'use client'

import { useState } from 'react'

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

  const pricingPlans = [
    {
      name: 'Community',
      price: 'Free',
      description: 'Perfect for getting started with AI agents',
      features: [
        'Basic agent templates',
        'Community support',
        'Up to 2 agents',
        'Standard tutorials',
        'Basic monitoring'
      ],
      cta: 'Get Started Free',
      popular: false,
      type: 'free'
    },
    {
      name: 'Pro',
      price: billingPeriod === 'monthly' ? '$29' : '$290',
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      description: 'For serious developers and small teams',
      features: [
        'Advanced agent templates',
        'Priority support',
        'Unlimited agents',
        'Premium workshops',
        'Advanced monitoring',
        'API key management',
        'Custom integrations'
      ],
      cta: 'Start Pro Trial',
      popular: true,
      type: 'subscription'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom agent development',
        'Dedicated support team',
        'On-premises deployment',
        'SLA guarantees',
        'Security compliance',
        'Training programs',
        'Volume discounts'
      ],
      cta: 'Contact Sales',
      popular: false,
      type: 'enterprise'
    }
  ]

  const dockerImages = [
    {
      name: 'Data Analyst Pro',
      price: '$49',
      description: 'Advanced data analysis with ML capabilities',
      features: [
        'Python, R, SQL support',
        'Machine learning models',
        'Automated reporting',
        'Data visualization',
        'API integrations'
      ],
      downloads: '1,200+'
    },
    {
      name: 'Content Creator Suite',
      price: '$39',
      description: 'Complete content generation and optimization',
      features: [
        'Multi-format content',
        'SEO optimization',
        'Brand voice training',
        'Social media integration',
        'Performance analytics'
      ],
      downloads: '850+'
    },
    {
      name: 'DevOps Assistant',
      price: '$59',
      description: 'Automated deployment and monitoring',
      features: [
        'CI/CD automation',
        'Infrastructure monitoring',
        'Security scanning',
        'Performance optimization',
        'Incident response'
      ],
      downloads: '650+'
    }
  ]

  const workshops = [
    {
      title: 'AI Agent Fundamentals',
      instructor: 'Dr. Sarah Chen',
      duration: '3 hours',
      price: '$99',
      date: 'March 15, 2024',
      spots: 8,
      description: 'Learn the basics of building and deploying AI agents',
      level: 'Beginner'
    },
    {
      title: 'Advanced Agent Architecture',
      instructor: 'Prof. Michael Rodriguez',
      duration: '6 hours',
      price: '$199',
      date: 'March 22, 2024',
      spots: 12,
      description: 'Deep dive into scalable agent systems and best practices',
      level: 'Advanced'
    },
    {
      title: 'Enterprise AI Deployment',
      instructor: 'Emily Johnson',
      duration: '4 hours',
      price: '$149',
      date: 'March 29, 2024',
      spots: 5,
      description: 'Production deployment strategies for enterprise environments',
      level: 'Intermediate'
    }
  ]

  const donationAmounts = [10, 25, 50, 100, 250]
  const [customDonation, setCustomDonation] = useState('')
  const [selectedDonation, setSelectedDonation] = useState(25)

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Path to AI Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Support our mission while accessing premium features, workshops, and prebuilt solutions
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="mb-20">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  billingPeriod === 'annual'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Annual
                <span className="text-green-600 text-sm ml-1">(Save 17%)</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-primary-500 scale-105' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'border border-primary-600 text-primary-600 hover:bg-primary-50'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Docker Images */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Prebuilt Docker Images
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dockerImages.map((image, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">{image.name}</h4>
                  <span className="text-2xl font-bold text-primary-600">{image.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{image.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {image.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{image.downloads} downloads</span>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                
                <button className="w-full btn-primary">
                  Purchase & Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Workshops */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Expert Workshops
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{workshop.title}</h4>
                    <p className="text-sm text-gray-600">by {workshop.instructor}</p>
                  </div>
                  <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm font-medium">
                    {workshop.level}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{workshop.description}</p>
                
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spots left:</span>
                    <span className="text-orange-600 font-medium">{workshop.spots}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">{workshop.price}</span>
                </div>
                
                <button className="w-full btn-secondary">
                  Reserve Spot
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Donations */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Support Our Mission
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Help us keep improving the platform and making AI accessible to everyone. 
              Your support helps us maintain free features and develop new tools.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-5 gap-3 mb-6">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedDonation(amount)}
                  className={`py-3 px-4 rounded-lg font-semibold transition-colors ${
                    selectedDonation === amount
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-300'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            <div className="flex gap-4 mb-6">
              <input
                type="number"
                value={customDonation}
                onChange={(e) => setCustomDonation(e.target.value)}
                placeholder="Custom amount"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="btn-primary px-8">
                Donate ${customDonation || selectedDonation}
              </button>
            </div>

            <div className="text-center text-sm text-gray-600">
              <p>🔒 Secure payment processing • Tax-deductible • Monthly or one-time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}