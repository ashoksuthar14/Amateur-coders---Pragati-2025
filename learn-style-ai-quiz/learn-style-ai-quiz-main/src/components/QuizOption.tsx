
import { cn } from "@/lib/utils";
import LearningStyleIcon from "./LearningStyleIcon";
import { LearningStyle } from "../types";
import { Button } from "@/components/ui/button";

interface QuizOptionProps {
  text: string;
  type: LearningStyle;
  isSelected: boolean;
  onClick: () => void;
}

export default function QuizOption({ text, type, isSelected, onClick }: QuizOptionProps) {
  const getStyleByType = (type: LearningStyle) => {
    const baseStyles = "transition-all duration-200 flex items-center gap-3";
    
    if (!isSelected) {
      return cn(baseStyles, "hover:bg-gray-100");
    }
    
    switch (type) {
      case "visual":
        return cn(baseStyles, "bg-indigo-100 border-indigo-300 text-indigo-700");
      case "auditory":
        return cn(baseStyles, "bg-violet-100 border-violet-300 text-violet-700");
      case "textual":
        return cn(baseStyles, "bg-blue-100 border-blue-300 text-blue-700");
      case "practical":
        return cn(baseStyles, "bg-emerald-100 border-emerald-300 text-emerald-700");
      default:
        return cn(baseStyles);
    }
  };
  
  const iconColor = isSelected ? `text-learn-${type}` : "text-gray-500";
  
  return (
    <Button
      variant={isSelected ? "outline" : "ghost"}
      className={cn("w-full justify-start text-left h-auto py-4 px-4", 
        getStyleByType(type),
        isSelected && "border-2"
      )}
      onClick={onClick}
    >
      <LearningStyleIcon type={type} className={iconColor} />
      <span>{text}</span>
    </Button>
  );
}
