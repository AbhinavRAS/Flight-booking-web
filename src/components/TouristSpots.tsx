import React from 'react';

const spots = [
  {
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1024',
    description: 'Famous for its stunning sunsets, white-washed buildings, and blue domes.',
    rating: 4.9,
    activities: ['Island Tours', 'Wine Tasting', 'Sunset Cruises']
  },
  {
    name: 'Machu Picchu, Peru',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=1024',
    description: 'Ancient Incan city set high in the Andes Mountains.',
    rating: 4.8,
    activities: ['Guided Tours', 'Hiking', 'Photography']
  },
  {
    name: 'Bora Bora',
    image: 'https://images.unsplash.com/photo-1598127957142-a664e2c40f8b?auto=format&fit=crop&q=80&w=1024',
    description: 'Luxury paradise with overwater bungalows and crystal-clear lagoons.',
    rating: 4.9,
    activities: ['Snorkeling', 'Spa', 'Island Hopping']
  },
  {
    name: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1024',
    description: 'Ultra-modern architecture meets traditional Arabian culture.',
    rating: 4.7,
    activities: ['Desert Safari', 'Shopping', 'Burj Khalifa']
  },
  {
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1024',
    description: 'Ancient temples, traditional gardens, and cultural experiences.',
    rating: 4.8,
    activities: ['Temple Visits', 'Tea Ceremony', 'Garden Tours']
  },
  {
    name: 'Venice, Italy',
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&q=80&w=1024',
    description: 'Romantic canals, historic architecture, and unique culture.',
    rating: 4.7,
    activities: ['Gondola Rides', 'St. Mark\'s Basilica', 'Murano Glass']
  }
];

export default function TouristSpots() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
      {spots.map((spot, index) => (
        <div 
          key={index} 
          className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
        >
          <div className="relative overflow-hidden">
            <img
              src={spot.image}
              alt={spot.name}
              className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center shadow-lg">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="ml-1.5 font-semibold text-gray-800">{spot.rating}</span>
            </div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {spot.name}
              </h3>
            </div>
          </div>
          
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">About the Destination</h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {spot.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-3">Popular Experiences</h4>
                <div className="flex flex-wrap gap-2.5">
                  {spot.activities.map((activity, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer border border-gray-100"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-sm">
                Plan Your Visit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}