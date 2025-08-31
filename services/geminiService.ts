
import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is configured in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might have better error handling or a fallback.
  // For this example, we'll throw an error if the key is missing.
  throw new Error("API_KEY is not configured in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateIcebreaker = async (): Promise<string> => {
  try {
    const prompt = `Generate one fun, light-hearted, and short icebreaker question suitable for a high school reunion. The question should be something that encourages sharing a positive memory or a fun fact. For example: "What's a favorite song from high school that you still listen to?" or "What was your most memorable high school moment?".`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          temperature: 0.9,
          topK: 40,
          topP: 0.95,
        }
    });

    const text = response.text.trim();
    // Sometimes the model might wrap the response in quotes, let's remove them.
    return text.replace(/^"|"$/g, '');
  } catch (error) {
    console.error("Error generating icebreaker:", error);
    return "Could not generate an icebreaker. What's your favorite memory from school?";
  }
};
