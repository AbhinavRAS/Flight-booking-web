import React from 'react';

const deals = [
  {
    type: 'flight',
    title: 'London to Paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600',
    price: '£99',
    description: 'Direct flights available daily',
  },
  {
    type: 'hotel',
    title: 'Luxury Resort in Bali',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=600',
    price: '£199/night',
    description: 'Beachfront villa with private pool',
  },
  {
    type: 'car',
    title: 'SUV Rental in Miami',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600',
    price: '£45/day',
    description: 'All-inclusive insurance',
  },
];

export default function FeaturedDeals() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {deals.map((deal, index) => (
        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <img
            src={deal.image}
            alt={deal.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{deal.title}</h3>
            <p className="text-gray-600 mb-4">{deal.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-600">{deal.price}</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}