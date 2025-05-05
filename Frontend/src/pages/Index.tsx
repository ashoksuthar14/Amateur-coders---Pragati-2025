
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import DashboardLinks from '../components/DashboardLinks';
import Mission from '../components/Mission';
import Statistics from '../components/Statistics';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <DashboardLinks />
        <Mission />
        <Statistics />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
