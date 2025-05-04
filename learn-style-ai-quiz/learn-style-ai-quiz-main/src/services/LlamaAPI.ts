
import { toast } from "sonner";
import { Question } from "../types";

const API_KEY = "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";

export async function generateQuestions(): Promise<Question[]> {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "HTTP-Referer": window.location.href,
        "X-Title": "Learning Style Quiz",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "meta-llama/llama-4-maverick:free",
        "messages": [
          {
            "role": "system",
            "content": "You are an educational psychology expert specializing in learning styles assessment."
          },
          {
            "role": "user",
            "content": `Generate 10 questions to determine whether someone is a visual, auditory, textual, or practical (kinesthetic) learner. 
            
            For each question:
            - Provide 4 answer options
            - Each option should clearly correspond to one learning style
            - Format as JSON array with this structure:
            [
              {
                "id": "1",
                "text": "How do you prefer to learn a new skill?",
                "options": [
                  {"text": "Watch someone demonstrate it", "type": "visual"},
                  {"text": "Listen to verbal instructions", "type": "auditory"},
                  {"text": "Read a manual or guide", "type": "textual"},
                  {"text": "Try it hands-on", "type": "practical"}
                ]
              }
            ]
            
            Make the questions diverse, covering different learning scenarios. Return ONLY the JSON array with no additional text.`
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the content from the response
    const content = data.choices[0].message.content;
    
    // Find and parse the JSON part
    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      const questions = JSON.parse(jsonMatch[0]);
      return questions;
    } else {
      // Fallback to default questions if JSON parsing fails
      console.error("Failed to parse questions from API response");
      return getDefaultQuestions();
    }
  } catch (error) {
    console.error("Error generating questions:", error);
    toast.error("Failed to generate questions. Using default questions instead.");
    return getDefaultQuestions();
  }
}

function getDefaultQuestions(): Question[] {
  return [
    {
      id: "1",
      text: "When learning a new skill, how do you prefer to get started?",
      options: [
        { text: "Watch someone demonstrate it first", type: "visual" },
        { text: "Listen to detailed verbal instructions", type: "auditory" },
        { text: "Read step-by-step written instructions", type: "textual" },
        { text: "Just start trying it out hands-on", type: "practical" }
      ]
    },
    {
      id: "2",
      text: "How do you best remember directions to a new place?",
      options: [
        { text: "Looking at a map or seeing landmarks", type: "visual" },
        { text: "Listening to verbal directions", type: "auditory" },
        { text: "Reading written directions", type: "textual" },
        { text: "Having traveled there once before", type: "practical" }
      ]
    },
    {
      id: "3",
      text: "When you're bored, you most likely:",
      options: [
        { text: "Watch videos or look at images", type: "visual" },
        { text: "Listen to music or a podcast", type: "auditory" },
        { text: "Read a book or article", type: "textual" },
        { text: "Do something active or hands-on", type: "practical" }
      ]
    },
    {
      id: "4",
      text: "When solving a problem, you typically:",
      options: [
        { text: "Visualize or sketch out solutions", type: "visual" },
        { text: "Talk through possibilities aloud", type: "auditory" },
        { text: "Make lists or write down your thoughts", type: "textual" },
        { text: "Try different approaches physically", type: "practical" }
      ]
    },
    {
      id: "5",
      text: "How do you prefer to study for an exam?",
      options: [
        { text: "Use charts, diagrams, and visual aids", type: "visual" },
        { text: "Recite information aloud or discuss with others", type: "auditory" },
        { text: "Read notes and textbooks thoroughly", type: "textual" },
        { text: "Create models or use practical exercises", type: "practical" }
      ]
    },
    {
      id: "6",
      text: "When attending a presentation, you find it easiest to engage when:",
      options: [
        { text: "There are visual slides and graphics", type: "visual" },
        { text: "The speaker is dynamic and expressive", type: "auditory" },
        { text: "Detailed handouts are provided", type: "textual" },
        { text: "There are interactive activities", type: "practical" }
      ]
    },
    {
      id: "7",
      text: "When explaining a concept to someone else, you tend to:",
      options: [
        { text: "Draw a diagram or show images", type: "visual" },
        { text: "Explain verbally with emphasis on tone", type: "auditory" },
        { text: "Write it down or refer to written resources", type: "textual" },
        { text: "Demonstrate through actions or examples", type: "practical" }
      ]
    },
    {
      id: "8",
      text: "You find it easiest to remember people's names by:",
      options: [
        { text: "Remembering their face or appearance", type: "visual" },
        { text: "Saying their name repeatedly aloud", type: "auditory" },
        { text: "Writing down their name or seeing it written", type: "textual" },
        { text: "Associating their name with a handshake or interaction", type: "practical" }
      ]
    },
    {
      id: "9",
      text: "When cooking a new recipe, you prefer to:",
      options: [
        { text: "Look at pictures of the finished dish", type: "visual" },
        { text: "Have someone explain the steps to you", type: "auditory" },
        { text: "Follow a written recipe precisely", type: "textual" },
        { text: "Figure it out as you go by taste and feel", type: "practical" }
      ]
    },
    {
      id: "10",
      text: "When assembling furniture, you typically:",
      options: [
        { text: "Focus on the diagrams and pictures", type: "visual" },
        { text: "Call someone to talk you through it", type: "auditory" },
        { text: "Read each instruction carefully", type: "textual" },
        { text: "Start putting pieces together to see what works", type: "practical" }
      ]
    }
  ];
}
