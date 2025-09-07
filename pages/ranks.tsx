import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { useState } from 'react'

export default function Ranks() {
  const [selectedRank, setSelectedRank] = useState<string | null>(null)
  
  const ranks = [
    {
      id: 'vip',
      name: 'VIP',
      price: '$9.99',
      color: 'from-green-400 to-green-600',
      features: ['Access to VIP areas', 'Custom chat color', '2x XP boost', 'Priority support']
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$19.99',
      color: 'from-blue-400 to-blue-600',
      features: ['All VIP features', 'Exclusive items', '3x XP boost', 'Custom commands', 'Private chat']
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      price: '$39.99',
      color: 'from-purple-400 to-purple-600',
      features: ['All Premium features', 'Admin privileges', '5x XP boost', 'Custom skins', 'Beta access']
    },
    {
      id: 'legend',
      name: 'Legend',
      price: '$69.99',
      color: 'from-yellow-400 to-orange-600',
      features: ['All Ultimate features', 'Legendary status', '10x XP boost', 'Custom world', 'VIP events']
    }
  ]

  return (
    <>
      <Head>
        <title>WebStore V1.2 - Ranks</title>
        <meta name="description" content="Purchase premium ranks for your gaming experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium <span className="text-indigo-600">Ranks</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upgrade your gaming experience with exclusive features, privileges, and benefits.
              Choose the rank that fits your playstyle.
            </p>
          </div>

          {/* Ranks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ranks.map((rank) => (
              <div
                key={rank.id}
                className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  selectedRank === rank.id ? 'ring-4 ring-indigo-500 transform scale-105' : ''
                }`}
              >
                <div className={`bg-gradient-to-r ${rank.color} p-6 text-white text-center`}>
                  <h3 className="text-2xl font-bold mb-2">{rank.name}</h3>
                  <div className="text-3xl font-extrabold">{rank.price}</div>
                  <div className="text-sm opacity-90">per month</div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {rank.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => setSelectedRank(selectedRank === rank.id ? null : rank.id)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                      selectedRank === rank.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-indigo-600 hover:text-white'
                    }`}
                  >
                    {selectedRank === rank.id ? 'Selected' : 'Select Rank'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Purchase Section */}
          {selectedRank && (
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Complete Your Purchase</h2>
              <div className="max-w-md mx-auto">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minecraft Username
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your email"
                  />
                </div>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200">
                  Purchase {ranks.find(r => r.id === selectedRank)?.name} Rank
                </button>
              </div>
            </div>
          )}

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How long does it take to receive my rank?</h3>
                <p className="text-gray-600 text-sm">Ranks are typically activated within 5-10 minutes after purchase.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I upgrade my rank later?</h3>
                <p className="text-gray-600 text-sm">Yes, you can upgrade at any time and pay only the difference.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Are there any refunds?</h3>
                <p className="text-gray-600 text-sm">Refunds are available within 24 hours of purchase if no benefits were used.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do ranks expire?</h3>
                <p className="text-gray-600 text-sm">Monthly subscriptions auto-renew. You can cancel anytime from your account.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}