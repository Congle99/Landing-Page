import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../data/chatbotPrompt";
console.log(import.meta.env.VITE_GEMINI_API_KEY);
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const sendMessageToGemini = async (userMessage) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${SYSTEM_PROMPT}

Người dùng hỏi:
${userMessage}`,
            },
          ],
        },
      ],
    });

    return response.text;
  } catch (error) {
    console.error(error);

    return "Xin lỗi, AuraBook AI đang gặp sự cố.";
  }
};