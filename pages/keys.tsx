import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { useState } from 'react'

export default function Keys() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'action', name: 'Action' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'strategy', name: 'Strategy' },
    { id: 'simulation', name: 'Simulation' }
  ]
  
  const gameKeys = [
    {
      id: 1,
      title: 'Epic Adventure Quest',
      category: 'adventure',
      price: '$29.99',
      originalPrice: '$39.99',
      discount: '25%',
      image: '/api/placeholder/300/200',
      rating: 4.8,
      description: 'Embark on an epic journey through mystical lands filled with challenges and rewards.'
    },
    {
      id: 2,
      title: 'Strategic Warfare',
      category: 'strategy',
      price: '$24.99',
      originalPrice: '$34.99',
      discount: '29%',
      image: '/api/placeholder/300/200',
      rating: 4.6,
      description: 'Command armies and build empires in this tactical strategy masterpiece.'
    },
    {
      id: 3,
      title: 'Action Hero Chronicles',
      category: 'action',
      price: '$19.99',
      originalPrice: '$24.99',
      discount: '20%',
      image: '/api/placeholder/300/200',
      rating: 4.7,
      description: 'Fast-paced action game with stunning visuals and intense combat sequences.'
    },
    {
      id: 4,
      title: 'City Builder Pro',
      category: 'simulation',
      price: '$34.99',
      originalPrice: '$44.99',
      discount: '22%',
      image: '/api/placeholder/300/200',
      rating: 4.5,
      description: 'Build and manage your dream city with advanced simulation mechanics.'
    },
    {
      id: 5,
      title: 'Mystery Detective',
      category: 'adventure',
      price: '$14.99',
      originalPrice: '$19.99',
      discount: '25%',
      image: '/api/placeholder/300/200',
      rating: 4.9,
      description: 'Solve intricate mysteries in this captivating detective adventure.'
    },
    {
      id: 6,
      title: 'Racing Champions',
      category: 'action',
      price: '$39.99',
      originalPrice: '$49.99',
      discount: '20%',
      image: '/api/placeholder/300/200',
      rating: 4.4,
      description: 'Experience high-speed racing with realistic physics and stunning tracks.'
    }
  ]
  
  const filteredKeys = gameKeys.filter(key => {
    const matchesSearch = key.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || key.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Head>
        <title>WebStore V1.2 - Game Keys</title>
        <meta name="description" content="Purchase game keys with instant delivery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Game <span className="text-indigo-600">Keys</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing games at unbeatable prices. Instant delivery guaranteed!
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search for games..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-indigo-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredKeys.map((game) => (
              <div key={game.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  {game.discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
                      -{game.discount}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{game.title}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(game.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({game.rating})</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{game.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-indigo-600">{game.price}</span>
                      {game.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{game.originalPrice}</span>
                      )}
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredKeys.length === 0 && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.513.73-6.291 1.955" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No games found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters.</p>
            </div>
          )}

          {/* Features Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Keys?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-indigo-100 rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Instant Delivery</h3>
                <p className="text-gray-600 text-sm">Get your game keys immediately after purchase via email</p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-100 rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">100% Authentic</h3>
                <p className="text-gray-600 text-sm">All keys are sourced directly from publishers and developers</p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-100 rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Best Prices</h3>
                <p className="text-gray-600 text-sm">Competitive pricing with regular discounts and promotions</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}