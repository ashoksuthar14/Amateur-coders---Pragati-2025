
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="py-16 md:py-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Empowering Rural India Through Education
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              ShikshaPath brings quality education to every corner of rural India, connecting students with teachers through our innovative digital platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-shiksha-500 hover:bg-shiksha-600 text-white px-8 py-6 text-lg"
                asChild
              >
                <a href="#dashboards">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-shiksha-500 text-shiksha-500 hover:bg-shiksha-50 px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-shiksha-500 rounded-lg"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?q=80&w=2059&auto=format&fit=crop" 
                  alt="Rural education in India" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
