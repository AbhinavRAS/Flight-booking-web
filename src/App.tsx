import React, { useState } from 'react';
import { Plane, User } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import FeaturedDeals from './components/FeaturedDeals';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import CarRentals from './pages/CarRentals';
import Deals from './pages/Deals';
import TouristSpots from './pages/TouristSpots';
import SignIn from './pages/SignIn';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center">
                <Plane className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">TravelEase</span>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link to="/flights" className="text-gray-600 hover:text-gray-900">Flights</Link>
                <Link to="/hotels" className="text-gray-600 hover:text-gray-900">Hotels</Link>
                <Link to="/car-rentals" className="text-gray-600 hover:text-gray-900">Car Rental</Link>
                <Link to="/deals" className="text-gray-600 hover:text-gray-900">Deals</Link>
                <Link to="/tourist-spots" className="text-gray-600 hover:text-gray-900">Tourist Spots</Link>
              </nav>
              <div className="flex items-center space-x-4">
                {isSignedIn ? (
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-600 hover:text-gray-900">
                      <User className="h-5 w-5 mr-1" />
                      <span>My Account</span>
                    </button>
                    <button 
                      onClick={() => setIsSignedIn(false)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <Link to="/signin" className="text-gray-600 hover:text-gray-900">Sign In</Link>
                    <Link
                      to="/signin"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/car-rentals" element={<CarRentals />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/tourist-spots" element={<TouristSpots />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About TravelEase</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Press Center</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2025 TravelEase. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[500px] object-cover"
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2048"
            alt="Travel background"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl md:text-6xl">
              Your Journey Begins Here
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Find and book the best deals on flights, hotels, and car rentals worldwide
            </p>
          </div>
          
          <SearchForm />
        </div>
      </div>

      {/* Featured Deals Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Deals</h2>
        <FeaturedDeals />
      </div>
    </>
  );
}

export default App;