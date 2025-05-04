
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import QuizOption from "../components/QuizOption";
import QuizProgress from "../components/QuizProgress";
import { Question, LearningStyle, QuizResult } from "../types";
import { generateQuestions } from "../services/LlamaAPI";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Quiz() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<LearningStyle, number>>({
    visual: 0,
    auditory: 0,
    textual: 0,
    practical: 0,
  });

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setLoading(true);
        const fetchedQuestions = await generateQuestions();
        setQuestions(fetchedQuestions);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load questions:", error);
        toast.error("Failed to load questions. Please try again.");
      }
    };

    loadQuestions();
  }, []);

  const currentQuestion = questions[currentQuestionIndex];
  
  const handleOptionSelect = (optionType: LearningStyle) => {
    setSelectedOption(optionType);
  };
  
  const handleNext = () => {
    if (!selectedOption) return;
    
    // Update scores
    setAnswers(prev => ({
      ...prev,
      [selectedOption]: prev[selectedOption as LearningStyle] + 1
    }));
    
    // Move to next question or finish
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    } else {
      // Calculate results and redirect
      const totalQuestions = questions.length;
      const results: QuizResult = {
        primary: calculatePrimaryStyle(answers),
        scores: {
          visual: Math.round((answers.visual / totalQuestions) * 100),
          auditory: Math.round((answers.auditory / totalQuestions) * 100),
          textual: Math.round((answers.textual / totalQuestions) * 100),
          practical: Math.round((answers.practical / totalQuestions) * 100)
        }
      };
      
      // Navigate to results page with the calculated results
      navigate("/results", { state: { results } });
    }
  };

  const calculatePrimaryStyle = (answers: Record<LearningStyle, number>): LearningStyle => {
    let maxScore = 0;
    let primaryStyle: LearningStyle = "visual";
    
    (Object.keys(answers) as LearningStyle[]).forEach(style => {
      if (answers[style] > maxScore) {
        maxScore = answers[style];
        primaryStyle = style;
      }
    });
    
    return primaryStyle;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-learn-bg p-4">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Generating Your Learning Style Quiz</h2>
          <p className="text-muted-foreground">Please wait while we prepare personalized questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-learn-bg p-4">
      <div className="w-full max-w-3xl">
        <QuizProgress current={currentQuestionIndex + 1} total={questions.length} />
        
        <Card className="mt-6 shadow-lg animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl">
              {currentQuestion?.text || "Loading question..."}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion?.options.map((option, index) => (
              <QuizOption
                key={index}
                text={option.text}
                type={option.type}
                isSelected={selectedOption === option.type}
                onClick={() => handleOptionSelect(option.type)}
              />
            ))}
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button 
              onClick={handleNext}
              disabled={!selectedOption}
              className="bg-learn-gradient hover:opacity-90"
            >
              {currentQuestionIndex < questions.length - 1 ? "Next Question" : "See Results"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
