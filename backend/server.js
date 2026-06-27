import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const knowledgeFolder = "./knowledge";

let knowledge = "";

const files = fs.readdirSync(knowledgeFolder);

for (const file of files) {
    knowledge +=
        fs.readFileSync(path.join(knowledgeFolder, file), "utf8") +
        "\n\n";
}

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

app.post("/chat", async (req, res) => {
    try {
        // Get the user's message
        const { message } = req.body;

        // Build the prompt
        const prompt = `
You are The Policy Exchange AI assistant.

Answer only using the provided knowledge.
If the answer isn't available, reply:
"I couldn't find that information in our knowledge base."

Knowledge:
${knowledge}

Question:
${message}
`;

        // Call Gemini
        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite",
            contents: prompt,
        });

       
        console.dir(result, { depth: null });

   
        const answer = result.candidates[0].content.parts[0].text;
        res.json({
            response: answer,
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            response: "Something went wrong while contacting Gemini.",
        });
    }
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});