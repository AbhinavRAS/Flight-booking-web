import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SearchForm from '../components/SearchForm';
import FeaturedDeals from '../components/FeaturedDeals';
import TouristSpots from '../components/TouristSpots';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    title: 'Flight Bookings',
    description: 'Find the best deals on flights worldwide',
    icon: '✈️',
    link: '/flights'
  },
  {
    title: 'Hotel Stays',
    description: 'Book comfortable stays at amazing prices',
    icon: '🏨',
    link: '/hotels'
  },
  {
    title: 'Car Rentals',
    description: 'Rent vehicles for your perfect road trip',
    icon: '🚗',
    link: '/car-rentals'
  }
];

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

const specialOffers = [
  {
    title: 'Summer Holiday Package',
    description: 'Flight + Hotel + Activities in Bali',
    price: '£999',
    savings: '30%',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600',
    duration: '7 nights'
  },
  {
    title: 'City Break Special',
    description: 'Flight + Hotel in Paris',
    price: '£499',
    savings: '25%',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600',
    duration: '3 nights'
  },
  {
    title: 'Road Trip Adventure',
    description: 'Car Rental + Hotels in California',
    price: '£799',
    savings: '20%',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=600',
    duration: '5 nights'
  }
];

const popularDestinations = [
  {
    name: 'Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600',
    description: 'The city of love and lights',
    price: '£299'
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80&w=600',
    description: 'Where tradition meets technology',
    price: '£599'
  },
  {
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=600',
    description: 'Breathtaking views and sunsets',
    price: '£449'
  }
];

export default function Home() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover transform scale-105 parallax-bg"
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2048"
            alt="Travel background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <AnimatedSection animation="slideUp" className="text-center mb-12">
            <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl mb-6">
              Your Journey Begins Here
            </h1>
            <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
              Discover amazing destinations, find the best deals, and create unforgettable memories
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeIn" delay={0.3}>
            <SearchForm type="flights" />
          </AnimatedSection>
        </div>
      </div>

      {/* Popular Flight Routes */}
      <div className="py-24 bg-white scroll-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Popular Flight Routes</h2>
            <p className="text-xl text-gray-600">Best deals on most traveled routes</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularRoutes.map((route, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 0.1}
                className="scroll-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative h-48">
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

      {/* Featured Hotels */}
      <div className="py-24 bg-gray-50 scroll-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Hotels</h2>
            <p className="text-xl text-gray-600">Luxurious stays at amazing prices</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredHotels.map((hotel, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 0.1}
                className="scroll-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative h-48">
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{hotel.name}</h3>
                  <p className="text-gray-600 mb-4">{hotel.location}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{hotel.price}</span>
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

      {/* Car Rentals */}
      <div className="py-24 bg-white scroll-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Car Rentals</h2>
            <p className="text-xl text-gray-600">Choose from our wide range of vehicles</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carCategories.map((car, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 0.1}
                className="scroll-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img
                    src={car.image}
                    alt={car.type}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{car.type}</h3>
                      <p className="text-gray-600">{car.brand}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-blue-600">{car.pricePerDay}</span>
                      <p className="text-sm text-gray-500">per day</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg">
                    Rent Now
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div className="py-24 bg-gray-50 scroll-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Special Offers</h2>
            <p className="text-xl text-gray-600">Exclusive deals and packages just for you</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {specialOffers.map((offer, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 0.1}
                className="scroll-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full">
                    Save {offer.savings}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <p className="text-gray-600 mb-4">Duration: {offer.duration}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{offer.price}</span>
                      <span className="text-gray-500 text-sm ml-2">per person</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeIn" delay={0.2} className="scroll-section">
            <FeaturedDeals />
          </AnimatedSection>
        </div>
      </div>

      {/* Tourist Spots */}
      <div className="py-24 bg-white scroll-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Tourist Spots</h2>
            <p className="text-xl text-gray-600">Discover amazing destinations around the world</p>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={0.2} className="scroll-section">
            <TouristSpots />
          </AnimatedSection>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16 scroll-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Sign up now and get exclusive travel deals
            </p>
            <Link
              to="/sign-in"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105"
            >
              Get Started
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
