import React from 'react';
import SearchForm from '../components/SearchForm';

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
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[400px] object-cover"
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2048"
            alt="Hotels background"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Find Your Perfect Stay
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Discover and book amazing hotels worldwide
            </p>
          </div>
          
          <SearchForm />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredHotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
                    <p className="text-gray-600">{hotel.location}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-600">{hotel.rating}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{hotel.price}</span>
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