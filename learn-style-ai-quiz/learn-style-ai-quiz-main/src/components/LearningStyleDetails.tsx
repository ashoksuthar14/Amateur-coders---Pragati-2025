
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LearningStyle } from "../types";
import LearningStyleIcon from "./LearningStyleIcon";

interface StyleInfo {
  title: string;
  description: string;
  tips: string[];
  color: string;
}

interface LearningStyleDetailsProps {
  type: LearningStyle;
}

export default function LearningStyleDetails({ type }: LearningStyleDetailsProps) {
  const styleInfo: Record<LearningStyle, StyleInfo> = {
    visual: {
      title: "Visual Learner",
      description: "You learn best through seeing information presented visually, like diagrams, charts, and videos.",
      tips: [
        "Use color-coded notes and highlighters",
        "Create mind maps and diagrams",
        "Watch educational videos",
        "Use flashcards with images",
        "Visualize concepts in your mind"
      ],
      color: "bg-indigo-100 text-indigo-700"
    },
    auditory: {
      title: "Auditory Learner",
      description: "You learn best through listening to information, discussions, and verbal explanations.",
      tips: [
        "Record lectures and listen to them again",
        "Read material aloud to yourself",
        "Participate in group discussions",
        "Use mnemonic devices and rhymes",
        "Explain concepts verbally to others"
      ],
      color: "bg-violet-100 text-violet-700"
    },
    textual: {
      title: "Textual Learner",
      description: "You learn best through reading and writing information in text format.",
      tips: [
        "Take detailed written notes",
        "Rewrite key points in your own words",
        "Create written summaries of material",
        "Use written instructions and manuals",
        "Keep a learning journal"
      ],
      color: "bg-blue-100 text-blue-700"
    },
    practical: {
      title: "Practical Learner",
      description: "You learn best through hands-on experiences, physical activities, and practice.",
      tips: [
        "Engage in hands-on experiments",
        "Take frequent breaks to move around",
        "Use physical models or manipulatives",
        "Apply concepts to real-world scenarios",
        "Practice through role-playing"
      ],
      color: "bg-emerald-100 text-emerald-700"
    }
  };

  const info = styleInfo[type];
  
  return (
    <Card className="shadow-md">
      <CardHeader className={`flex flex-row items-center gap-3 ${info.color} rounded-t-lg`}>
        <LearningStyleIcon type={type} size={28} />
        <CardTitle>{info.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <p>{info.description}</p>
        
        <div>
          <h4 className="font-medium mb-2">Learning Tips:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {info.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
