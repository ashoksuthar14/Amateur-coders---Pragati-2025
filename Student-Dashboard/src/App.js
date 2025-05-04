import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import GroupManagementDashboard from './components/GroupManagementDashboard';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FeatureSection />
            </>
          } />
          <Route path="/group-management" element={<GroupManagementDashboard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
