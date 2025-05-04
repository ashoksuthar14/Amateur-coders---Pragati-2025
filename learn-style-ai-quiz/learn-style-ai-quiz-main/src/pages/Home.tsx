
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LearningStyleIcon from "../components/LearningStyleIcon";
import { BookOpen, Users } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  
  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-learn-bg p-4">
      <div className="w-full max-w-4xl text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-learn-gradient">
          Discover Your Learning Style
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Take our quiz to understand how you learn best and unlock your full learning potential.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card className="bg-indigo-50 border-indigo-100">
            <CardContent className="flex flex-col items-center pt-6">
              <div className="p-3 bg-white rounded-full shadow-sm mb-4">
                <LearningStyleIcon type="visual" size={32} className="text-learn-visual" />
              </div>
              <h2 className="font-semibold text-lg mb-2">Visual</h2>
              <p className="text-sm text-center text-muted-foreground">
                Learn through seeing and visualizing information
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-violet-50 border-violet-100">
            <CardContent className="flex flex-col items-center pt-6">
              <div className="p-3 bg-white rounded-full shadow-sm mb-4">
                <LearningStyleIcon type="auditory" size={32} className="text-learn-auditory" />
              </div>
              <h2 className="font-semibold text-lg mb-2">Auditory</h2>
              <p className="text-sm text-center text-muted-foreground">
                Learn through listening and verbal discussions
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-50 border-blue-100">
            <CardContent className="flex flex-col items-center pt-6">
              <div className="p-3 bg-white rounded-full shadow-sm mb-4">
                <LearningStyleIcon type="textual" size={32} className="text-learn-textual" />
              </div>
              <h2 className="font-semibold text-lg mb-2">Textual</h2>
              <p className="text-sm text-center text-muted-foreground">
                Learn through reading and writing information
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-emerald-50 border-emerald-100">
            <CardContent className="flex flex-col items-center pt-6">
              <div className="p-3 bg-white rounded-full shadow-sm mb-4">
                <LearningStyleIcon type="practical" size={32} className="text-learn-practical" />
              </div>
              <h2 className="font-semibold text-lg mb-2">Practical</h2>
              <p className="text-sm text-center text-muted-foreground">
                Learn through hands-on activities and practice
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex flex-col items-center space-y-6">
          <Button 
            size="lg" 
            className="text-lg py-6 px-10 bg-learn-gradient hover:opacity-90 transition-all shadow-md"
            onClick={handleStartQuiz}
          >
            <BookOpen className="mr-2" />
            Start Your Assessment
          </Button>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users size={20} />
            <span>Join 10,000+ students who have discovered their learning style</span>
          </div>
        </div>
      </div>
    </div>
  );
}
