import React from 'react';
import SearchForm from '../components/SearchForm';
import AnimatedSection from '../components/AnimatedSection';

const featuredHotels = [
  {
    name: 'Grand Luxury Resort & Spa',
    location: 'Maldives',
    price: '£399/night',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=600',
    amenities: ['Spa', 'Pool', 'Beach Access', 'Fine Dining']
  },
  {
    name: 'Urban Boutique Hotel',
    location: 'Paris',
    price: '£299/night',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=600',
    amenities: ['City View', 'Restaurant', 'Fitness Center', 'Bar']
  },
  {
    name: 'Mountain Lodge Retreat',
    location: 'Swiss Alps',
    price: '£349/night',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1601701119533-fde78d10d09f?auto=format&fit=crop&q=80&w=600',
    amenities: ['Ski Access', 'Fireplace', 'Restaurant', 'Spa']
  }
];

export default function Hotels() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-[400px] object-cover transform scale-105"
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2048"
            alt="Hotels background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimatedSection animation="slideUp" className="text-center mb-12">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-4">
              Find Your Perfect Stay
            </h1>
            <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
              Discover and book amazing hotels worldwide
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeIn" delay={0.3}>
            <SearchForm type="hotels" />
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection animation="fadeIn" className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Hotels</h2>
          <p className="text-gray-600 text-lg">Discover our top-rated accommodations</p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHotels.map((hotel, index) => (
            <AnimatedSection
              key={index}
              animation="scale"
              delay={index * 0.1}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="overflow-hidden relative h-48">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="font-semibold">{hotel.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{hotel.name}</h3>
                  <p className="text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {hotel.location}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-2xl font-bold text-blue-600">{hotel.price}</span>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}