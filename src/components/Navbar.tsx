import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">TravelEase</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/flights"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Flights
            </Link>
            <Link
              to="/hotels"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Hotels
            </Link>
            <Link
              to="/car-rentals"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Car Rentals
            </Link>
            <Link
              to="/deals"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Deals
            </Link>
            <Link
              to="/tourist-spots"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Tourist Spots
            </Link>
            <Link
              to="/sign-in"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
