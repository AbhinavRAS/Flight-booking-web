import FeaturedDeals from '../components/FeaturedDeals';
import AnimatedSection from '../components/AnimatedSection';

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

export default function Deals() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[400px] object-cover"
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2048"
            alt="Deals background"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimatedSection animation="slideUp" className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Exclusive Travel Deals
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Save big on your next adventure with our special offers
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <AnimatedSection animation="fadeIn" className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Deals</h2>
          <p className="text-gray-600 text-lg">Hand-picked offers from our partners</p>
        </AnimatedSection>
        <AnimatedSection animation="fadeIn" delay={0.2} className="mb-16">
          <FeaturedDeals />
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Special Offers</h2>
          <p className="text-gray-600 text-lg">Exclusive deals and packages just for you</p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialOffers.map((offer, index) => (
            <AnimatedSection
              key={index}
              animation="scale"
              delay={index * 0.1}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
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
      </div>
    </div>
  );
}