import React from 'react';
import SearchForm from '../components/SearchForm';
import { useGsapAnimation } from '../hooks/useGsapAnimation';

const carCategories = [
  {
    type: 'Economy',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
    pricePerDay: '£30',
    features: ['Fuel Efficient', '4 Seats', 'Automatic', 'A/C'],
    brand: 'Toyota Corolla',
    transmission: 'Automatic'
  },
  {
    type: 'SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600',
    pricePerDay: '£45',
    features: ['Spacious', '7 Seats', 'Automatic', 'A/C'],
    brand: 'Honda CR-V',
    transmission: 'Automatic'
  },
  {
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1555626906-fcf10d6851b4?auto=format&fit=crop&q=80&w=600',
    pricePerDay: '£75',
    features: ['Premium', '4 Seats', 'Automatic', 'Full Options'],
    brand: 'Mercedes-Benz E-Class',
    transmission: 'Automatic'
  }
];

export default function CarRentals() {
  useGsapAnimation();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-[400px] object-cover transform scale-105"
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2048"
            alt="Car rentals background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="hero-content text-center mb-12">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-4">
              Rent Your Perfect Car
            </h1>
            <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
              Choose from our wide selection of vehicles for any occasion
            </p>
          </div>
          
          <div className="search-form">
            <SearchForm type="cars" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="section-title text-3xl font-bold text-gray-900 mb-8">Available Car Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carCategories.map((car, index) => (
            <div key={index} className="card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="card-image-container overflow-hidden relative h-48">
                <img
                  src={car.image}
                  alt={car.type}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="font-semibold text-blue-600">{car.type}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{car.brand}</h3>
                  <p className="text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {car.transmission}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-2xl font-bold text-blue-600">{car.pricePerDay}/day</span>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}