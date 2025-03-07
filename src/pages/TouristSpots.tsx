import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import TouristSpots from '../components/TouristSpots';

export default function TouristSpotsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[400px] object-cover"
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80&w=2048"
            alt="Tourist spots background"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimatedSection animation="slideUp" className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Top Tourist Destinations
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              Explore the world's most beautiful and popular tourist spots
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <AnimatedSection animation="fadeIn" className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Tourist Spots</h2>
          <p className="text-gray-600 text-lg">Discover amazing destinations around the world</p>
        </AnimatedSection>
        <AnimatedSection animation="fadeIn" delay={0.2}>
          <TouristSpots />
        </AnimatedSection>
      </div>
    </div>
  );
}