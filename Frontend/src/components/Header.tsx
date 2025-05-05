
import { useState } from 'react';
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-shiksha-500">
            Shiksha<span className="text-gray-800">Path</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-shiksha-500 transition-colors">Home</a>
          <a href="#dashboards" className="text-gray-700 hover:text-shiksha-500 transition-colors">Dashboards</a>
          <a href="#mission" className="text-gray-700 hover:text-shiksha-500 transition-colors">Mission</a>
          <a href="#statistics" className="text-gray-700 hover:text-shiksha-500 transition-colors">Impact</a>
          <Button className="bg-shiksha-500 hover:bg-shiksha-600 text-white">
            Join Now
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-shiksha-500 transition-colors py-2" onClick={toggleMenu}>Home</a>
            <a href="#dashboards" className="text-gray-700 hover:text-shiksha-500 transition-colors py-2" onClick={toggleMenu}>Dashboards</a>
            <a href="#mission" className="text-gray-700 hover:text-shiksha-500 transition-colors py-2" onClick={toggleMenu}>Mission</a>
            <a href="#statistics" className="text-gray-700 hover:text-shiksha-500 transition-colors py-2" onClick={toggleMenu}>Impact</a>
            <Button className="bg-shiksha-500 hover:bg-shiksha-600 text-white w-full">
              Join Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
