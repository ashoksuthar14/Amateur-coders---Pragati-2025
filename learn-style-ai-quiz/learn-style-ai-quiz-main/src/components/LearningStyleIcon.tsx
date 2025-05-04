
import { Eye, Headphones, BookOpen, Hand } from "lucide-react";
import { LearningStyle } from "../types";
import { cn } from "@/lib/utils";

interface LearningStyleIconProps {
  type: LearningStyle;
  size?: number;
  className?: string;
}

export default function LearningStyleIcon({ type, size = 24, className }: LearningStyleIconProps) {
  const iconProps = {
    size,
    className: cn("", className),
    strokeWidth: 2
  };

  switch (type) {
    case "visual":
      return <Eye {...iconProps} />;
    case "auditory":
      return <Headphones {...iconProps} />;
    case "textual":
      return <BookOpen {...iconProps} />;
    case "practical":
      return <Hand {...iconProps} />;
    default:
      return <Eye {...iconProps} />;
  }
}
