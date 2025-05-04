
import { toast } from "sonner";

const API_KEY = "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";
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

interface TranscriptionRequest {
  audioUrl: string;
}

interface TranslationRequest {
  text: string;
  targetLanguage: string;
}

export interface TranscriptionResponse {
  text: string;
}

export interface TranslationResponse {
  translatedText: string;
}

// Function to handle API errors
const handleApiError = (error: any) => {
  console.error("API Error:", error);
  
  // Check for rate limit errors
  if (error?.code === 429) {
    toast.error("API quota exceeded. Please try again later or use a different API key.");
    return "The API quota has been exceeded. Please try again later or use a different API key.";
  }
  
  // Generic error message
  return error?.message || "An unexpected error occurred";
};

// Function to transcribe audio using Gemini API
export const transcribeAudio = async (request: TranscriptionRequest): Promise<TranscriptionResponse> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "HTTP-Referer": window.location.origin,
        "X-Title": "Content Converter",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "google/gemini-2.0-flash-exp:free",
        "messages": [
          {
            "role": "user",
            "content": [
              {
                "type": "text",
                "text": "Transcribe the audio in this file. Only return the transcribed text with no additional commentary."
              },
              {
                "type": "image_url", // Gemini accepts audio as images in base64 format
                "image_url": {
                  "url": request.audioUrl
                }
              }
            ]
          }
        ]
      })
    });

    const data = await response.json();
    console.log("Transcription response:", data);
    
    if (!response.ok) {
      const errorMessage = handleApiError(data.error);
      throw new Error(errorMessage);
    }

    const transcribedText = data.choices?.[0]?.message?.content || "";
    return { text: transcribedText };
  } catch (error) {
    console.error("Transcription error:", error);
    toast.error(error instanceof Error ? error.message : "Failed to transcribe audio");
    throw error;
  }
};

// Function to translate text using Gemini API with optimized settings
export const translateText = async (request: TranslationRequest): Promise<TranslationResponse> => {
  try {
    // Optimization: Add temperature and maxTokens parameters for faster translation
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "HTTP-Referer": window.location.origin,
        "X-Title": "Content Converter",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "google/gemini-2.0-flash-exp:free",
        "messages": [
          {
            "role": "user",
            "content": [
              {
                "type": "text",
                "text": `Translate the following text to ${request.targetLanguage}. Only return the translated text with no additional commentary:\n\n${request.text}`
              }
            ]
          }
        ],
        "temperature": 0.3, // Lower temperature for faster, more predictable results
        "max_tokens": 1500, // Limit token count for faster response
        "stream": false // Ensure we get the complete response at once
      })
    });

    const data = await response.json();
    console.log("Translation response:", data);
    
    if (!response.ok) {
      const errorMessage = handleApiError(data.error);
      throw new Error(errorMessage);
    }

    const translatedText = data.choices?.[0]?.message?.content || "";
    return { translatedText };
  } catch (error) {
    console.error("Translation error:", error);
    toast.error(error instanceof Error ? error.message : "Failed to translate text");
    throw error;
  }
};
