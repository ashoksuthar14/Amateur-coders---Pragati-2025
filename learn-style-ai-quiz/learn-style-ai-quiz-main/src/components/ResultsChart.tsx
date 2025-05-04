
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { LearningStyle } from "../types";

interface ResultsChartProps {
  scores: Record<LearningStyle, number>;
}

export default function ResultsChart({ scores }: ResultsChartProps) {
  const data = [
    {
      name: "Visual",
      score: scores.visual,
      fill: "#6366f1"
    },
    {
      name: "Auditory",
      score: scores.auditory,
      fill: "#8b5cf6"
    },
    {
      name: "Textual",
      score: scores.textual,
      fill: "#3b82f6"
    },
    {
      name: "Practical",
      score: scores.practical,
      fill: "#10b981"
    }
  ];

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip 
            formatter={(value) => [`${value}%`, "Score"]}
            labelStyle={{ color: "#374151" }}
            contentStyle={{ 
              backgroundColor: "white", 
              border: "1px solid #e5e7eb",
              borderRadius: "0.375rem"
            }}
          />
          <Bar dataKey="score" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
