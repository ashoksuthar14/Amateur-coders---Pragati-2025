
import { Card, CardContent } from "@/components/ui/card";
import { School, Users, Book } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: School,
      title: "Inclusive Education",
      description: "Making quality education accessible to all, regardless of geographical barriers."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Creating a supportive network of students, teachers, and educational resources."
    },
    {
      icon: Book,
      title: "Digital Literacy",
      description: "Empowering rural communities with the skills needed for the digital age."
    }
  ];

  return (
    <section id="mission" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-shiksha-500">Mission</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At ShikshaPath, we're dedicated to bridging the educational divide between urban and rural India through technology and innovation.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
              alt="Rural education mission" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              style={{ maxHeight: "400px" }}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Bridging the Educational Divide</h3>
            <p className="text-gray-600 mb-6">
              ShikshaPath was created as part of the Meta Pragati Hackathon with a clear vision: to bring quality education to the most remote areas of India, empowering students and teachers with digital tools that make learning accessible, engaging, and effective.
            </p>
            <p className="text-gray-600 mb-6">
              Our platform connects rural students with qualified teachers, provides structured learning paths, and offers resources that work even in low-connectivity environments.
            </p>
            <h4 className="text-xl font-semibold mb-4">Our Core Values</h4>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-shiksha-500 rounded-full">
                    <value.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold">{value.title}</h5>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
