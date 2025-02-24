import React from 'react';
import SearchForm from '../components/SearchForm';
import AnimatedSection from '../components/AnimatedSection';

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
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-[400px] object-cover transform scale-105"
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2048"
            alt="Flights background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimatedSection animation="slideUp" className="text-center mb-12">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-4">
              Find Your Perfect Flight
            </h1>
            <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
              Search and compare flights from hundreds of airlines worldwide
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeIn" delay={0.3}>
            <SearchForm type="flights" />
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection animation="fadeIn" className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Routes</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularRoutes.map((route, index) => (
            <AnimatedSection
              key={index}
              animation="scale"
              delay={index * 0.1}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="overflow-hidden relative h-48">
                <img
                  src={route.image}
                  alt={`${route.from} to ${route.to}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
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
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg">
                    Book Now
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}