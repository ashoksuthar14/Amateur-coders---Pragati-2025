
import { Book, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DashboardLinks = () => {
  const dashboards = [
    {
      title: "Student Dashboard",
      description:
        "Access study materials, track progress, complete assignments, and connect with teachers.",
      icon: Book,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      url: "https://student-dashboard-amature.netlify.app/",
      buttonText: "Student Login",
    },
    {
      title: "Teacher Dashboard",
      description:
        "Create courses, manage students, track performance, and provide personalized feedback.",
      icon: GraduationCap,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      url: "https://teacher-dashboard-amateur.netlify.app/",
      buttonText: "Teacher Login",
    },
  ];

  return (
    <section id="dashboards" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Access Your <span className="text-shiksha-500">Dashboard</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the dashboard that matches your role and begin your educational journey with ShikshaPath.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {dashboards.map((dashboard, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`${dashboard.color} h-2`}></div>
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-full ${dashboard.color} flex items-center justify-center mb-6`}>
                  <dashboard.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{dashboard.title}</h3>
                <p className="text-gray-600 mb-6">{dashboard.description}</p>
                <Button 
                  className={`w-full ${index === 0 ? 'bg-blue-500 hover:bg-blue-600' : 'bg-indigo-500 hover:bg-indigo-600'}`}
                  asChild
                >
                  <a href={dashboard.url} target="_blank" rel="noopener noreferrer">
                    {dashboard.buttonText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardLinks;
