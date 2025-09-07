import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { useState } from 'react'

export default function Unbans() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    banReason: '',
    appealReason: '',
    banDate: '',
    serverName: ''
  })

  const [activeTab, setActiveTab] = useState('appeal')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Unban appeal submitted:', formData)
  }

  const unbanServices = [
    {
      id: 'basic',
      name: 'Basic Appeal',
      price: '$9.99',
      description: 'Standard unban appeal processing',
      features: ['Manual review', '24-48 hours processing', 'Email updates', 'Basic support'],
      processingTime: '24-48 hours'
    },
    {
      id: 'priority',
      name: 'Priority Appeal',
      price: '$19.99',
      description: 'Faster processing with priority review',
      features: ['Priority review', '12-24 hours processing', 'SMS & Email updates', 'Priority support', 'Status tracking'],
      processingTime: '12-24 hours'
    },
    {
      id: 'express',
      name: 'Express Appeal',
      price: '$39.99',
      description: 'Fastest processing available',
      features: ['Express review', '2-6 hours processing', 'Real-time updates', 'Dedicated support', 'Status tracking', 'Success guarantee*'],
      processingTime: '2-6 hours'
    }
  ]

  return (
    <>
      <Head>
        <title>WebStore V1.2 - Unban Services</title>
        <meta name="description" content="Appeal your ban and get back to playing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-indigo-600">Unban</span> Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got banned unfairly? We&apos;ll help you appeal your ban and get back to playing.
              Professional appeal services with high success rates.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setActiveTab('appeal')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === 'appeal' 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Submit Appeal
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === 'services' 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                View Services
              </button>
            </div>
          </div>

          {activeTab === 'appeal' && (
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Unban Appeal</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                      Username *
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      required
                      value={formData.username}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your in-game username"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="serverName" className="block text-sm font-medium text-gray-700 mb-2">
                      Server Name *
                    </label>
                    <input
                      type="text"
                      id="serverName"
                      name="serverName"
                      required
                      value={formData.serverName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Server where you were banned"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="banDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Ban Date (approximate)
                    </label>
                    <input
                      type="date"
                      id="banDate"
                      name="banDate"
                      value={formData.banDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="banReason" className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Ban *
                  </label>
                  <input
                    type="text"
                    id="banReason"
                    name="banReason"
                    required
                    value={formData.banReason}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="What were you banned for?"
                  />
                </div>

                <div>
                  <label htmlFor="appealReason" className="block text-sm font-medium text-gray-700 mb-2">
                    Appeal Explanation *
                  </label>
                  <textarea
                    id="appealReason"
                    name="appealReason"
                    required
                    rows={6}
                    value={formData.appealReason}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Explain why you believe the ban was unfair or provide additional context..."
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex">
                    <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-blue-900 mb-1">Appeal Tips</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Be honest and provide all relevant details</li>
                        <li>• Include any evidence that supports your case</li>
                        <li>• Be respectful and professional in your explanation</li>
                        <li>• Double-check all information before submitting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Submit Appeal (Free)
                </button>
              </form>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {unbanServices.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                      <div className="text-2xl font-bold text-indigo-600">{service.price}</div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-700 mb-2">Processing Time:</div>
                      <div className="text-lg font-semibold text-green-600">{service.processingTime}</div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200">
                      Choose Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Stats Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Success Record</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">87%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">2,500+</div>
                <div className="text-gray-600">Appeals Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">6hrs</div>
                <div className="text-gray-600">Average Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What&apos;s the success rate?</h3>
                <p className="text-gray-600 text-sm">Our overall success rate is 87%. This varies based on the reason for the ban and evidence provided.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How long does it take?</h3>
                <p className="text-gray-600 text-sm">Processing times range from 2-48 hours depending on the service level you choose.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What if the appeal fails?</h3>
                <p className="text-gray-600 text-sm">We offer a partial refund policy for failed appeals, and can provide guidance on alternative approaches.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I appeal multiple times?</h3>
                <p className="text-gray-600 text-sm">Yes, but we recommend waiting at least 30 days between appeals and providing new evidence.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}