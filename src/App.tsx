import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
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
        <Navbar />
        
        {/* Main Content */}
        <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/car-rentals" element={<CarRentals />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/tourist-spots" element={<TouristSpots />} />
            <Route path="/sign-in" element={<SignIn setIsSignedIn={setIsSignedIn} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;