import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SearchForm from '../components/SearchForm';

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

const destinations = [
  {
    name: 'Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600',
    description: 'The city of love and lights'
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80&w=600',
    description: 'Where tradition meets technology'
  },
  {
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=600',
    description: 'Breathtaking views and sunsets'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover transform scale-105"
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

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Plan Your Perfect Trip</h2>
            <p className="text-xl text-gray-600">Everything you need in one place</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 0.1}
                className="relative group"
              >
                <Link
                  to={feature.link}
                  className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Popular Destinations</h2>
            <p className="text-xl text-gray-600">Explore these amazing places</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 0.1}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{destination.country}</p>
                  <p className="text-gray-600">{destination.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Sign up now and get exclusive travel deals
            </p>
            <Link
              to="/deals"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105"
            >
              View Special Offers
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
