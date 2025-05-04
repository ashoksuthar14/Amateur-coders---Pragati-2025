
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LearningStyleDetails from "../components/LearningStyleDetails";
import ResultsChart from "../components/ResultsChart";
import { QuizResult } from "../types";
import { Share2, Redo } from "lucide-react";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results as QuizResult;
  
  if (!results) {
    navigate("/");
    return null;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Learning Style Results",
        text: `I'm primarily a ${results.primary} learner! Take the quiz to discover your learning style.`,
        url: window.location.origin,
      }).catch(console.error);
    } else {
      // Fallback - copy URL to clipboard
      navigator.clipboard.writeText(window.location.origin)
        .then(() => alert("Link copied to clipboard!"))
        .catch(console.error);
    }
  };

  const handleRetake = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-learn-bg p-6">
      <div className="w-full max-w-4xl animate-fade-in">
        <Card className="mb-6 shadow-md text-center">
          <CardHeader className="bg-learn-gradient rounded-t-lg text-white">
            <CardTitle className="text-3xl font-bold">Your Learning Style Results</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-6">
              You are primarily a{" "}
              <span className={`font-bold capitalize text-learn-${results.primary}`}>
                {results.primary}
              </span>{" "}
              learner!
            </h2>
            
            <ResultsChart scores={results.scores} />
            
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <Button 
                variant="outline" 
                className="flex gap-2" 
                onClick={handleShare}
              >
                <Share2 size={16} />
                Share Results
              </Button>
              <Button 
                className="flex gap-2 bg-learn-gradient hover:opacity-90" 
                onClick={handleRetake}
              >
                <Redo size={16} />
                Retake Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <LearningStyleDetails type={results.primary} />
        
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold">Other Learning Styles</h3>
          <p className="text-muted-foreground">
            While your primary learning style is {results.primary}, understanding all learning styles can 
            help you develop balanced learning strategies. Explore your secondary styles below:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {(Object.keys(results.scores) as Array<keyof typeof results.scores>)
              .filter(style => style !== results.primary)
              .map(style => (
                <div key={style} className="animate-fade-in">
                  <LearningStyleDetails type={style} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
