import React from 'react';
import SearchForm from '../components/SearchForm';

const popularRoutes = [
  {
    from: 'London',
    to: 'New York',
    price: '£299',
    airline: 'British Airways',
    duration: '7h 30m',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=600'
  },
  {
    from: 'Paris',
    to: 'Tokyo',
    price: '£599',
    airline: 'Air France',
    duration: '11h 45m',
    image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80&w=600'
  },
  {
    from: 'Dubai',
    to: 'Singapore',
    price: '£449',
    airline: 'Emirates',
    duration: '7h 15m',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=600'
  }
];

export default function Flights() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[400px] object-cover"
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2048"
            alt="Flights background"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Find Your Perfect Flight
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Search and compare flights from hundreds of airlines worldwide
            </p>
          </div>
          
          <SearchForm />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Routes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRoutes.map((route, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <img
                src={route.image}
                alt={`${route.from} to ${route.to}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{route.from} → {route.to}</h3>
                    <p className="text-gray-600">{route.airline}</p>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">{route.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Duration: {route.duration}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}