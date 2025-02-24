import React from 'react';
import SearchForm from '../components/SearchForm';

const carCategories = [
  {
    type: 'Economy',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
    pricePerDay: '£30',
    features: ['Fuel Efficient', '4 Seats', 'Automatic', 'A/C']
  },
  {
    type: 'SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600',
    pricePerDay: '£45',
    features: ['Spacious', '7 Seats', 'Automatic', 'A/C']
  },
  {
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1555626906-fcf10d6851b4?auto=format&fit=crop&q=80&w=600',
    pricePerDay: '£75',
    features: ['Premium', '4 Seats', 'Automatic', 'Full Options']
  }
];

export default function CarRentals() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[400px] object-cover"
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2048"
            alt="Car rentals background"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Rent Your Perfect Car
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Choose from our wide selection of vehicles for any occasion
            </p>
          </div>
          
          <SearchForm />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Car Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carCategories.map((car, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <img
                src={car.image}
                alt={car.type}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{car.type}</h3>
                  <span className="text-2xl font-bold text-blue-600">{car.pricePerDay}/day</span>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <span className="mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Rent Now
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