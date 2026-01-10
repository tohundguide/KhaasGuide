import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are "Tohund Guide AI", a senior business consultant specializing in company formation in the UAE (Dubai, Abu Dhabi, Sharjah, etc.). 
Your tone is professional, encouraging, and authoritative yet accessible.

Your Knowledge Base:
- Differences between Mainland, Freezone, and Offshore jurisdictions.
- Licensing costs (approximate estimates in AED).
- Visa processes for investors and employees.
- Banking assistance and corporate tax (9% on profits over 375k AED).

Guidelines:
1. Keep answers concise (under 150 words unless detailed explanation is asked).
2. Always encourage the user to "Book a Free Consultation" for exact quotes.
3. If asked about prices, provide ranges and disclaimer that prices vary by jurisdiction.
4. Do not provide legal advice; assume the role of a business setup strategist.
`;

let aiInstance: GoogleGenAI | null = null;

const getAI = (): GoogleGenAI => {
  if (!aiInstance) {
    aiInstance = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return aiInstance;
};

export const createChatSession = (): Chat => {
  const ai = getAI();
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (
  chat: Chat, 
  message: string
): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I apologize, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic. Please try again in a moment.";
  }
};
