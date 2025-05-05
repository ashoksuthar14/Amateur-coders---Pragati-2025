
import { Card, CardContent } from "@/components/ui/card";

const Statistics = () => {
  const stats = [
    {
      value: "200+",
      label: "Rural Schools Connected",
    },
    {
      value: "5,000+",
      label: "Students Impacted",
    },
    {
      value: "500+",
      label: "Teachers Onboarded",
    },
    {
      value: "15+",
      label: "States Reached",
    },
  ];

  return (
    <section id="statistics" className="py-16 bg-shiksha-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Impact
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            ShikshaPath is making a difference across rural India. Here's our impact so far.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-2xl font-bold text-white mb-4">Join the ShikshaPath Movement</h3>
              <p className="text-white/80 mb-4">
                Whether you're a student seeking knowledge, a teacher wanting to make a difference, or an organization looking to partner with us, become part of our mission to transform rural education in India.
              </p>
              <p className="text-white/80">
                Together, we can build a brighter future for every child in rural India.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-shiksha-500 mb-4">Meta Pragati Initiative</h4>
                <p className="text-gray-600 text-sm">
                  ShikshaPath is proudly developed as part of the Meta Pragati hackathon, focusing on technological solutions for India's advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
