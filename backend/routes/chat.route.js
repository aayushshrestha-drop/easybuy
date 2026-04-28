const express = require('express');
const router = express.Router();
const csv = require('csvtojson');
const path = require('path');
const OpenAI = require('openai');
const SYSTEM_PROMPT = `
You are an assistant for a Pi Network app discovery platform.

STRICT RULES:
- Only answer questions related to Pi Network and Pi apps.
- If the question is unrelated, respond with:
  "I can only help with Pi Network apps."
- Do NOT answer general knowledge questions.
- Always recommend apps from the provided dataset.
- Do NOT invent apps.

Output format:
{
  "message": "",
  "apps": []
}
`;
// Chat with chatbot
router.post('/', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'csv', 'apps.csv');

    const appsJson = await csv().fromFile(filePath);
    const appsContext = appsJson.map(a =>
      `${a.name}: ${a.description} [${a.category}]`
    ).join("\n");

    const userQuery = req.body.message;
    if(!userQuery) {
      return res.status(400).json({ message: 'Please provide a query' });
    }
    const client = new OpenAI({
      apiKey: process.env.OPEN_ROUTER_API_KEY,
      baseURL: process.env.OPEN_ROUTER_API_BASE_URL,
    });

    const response = await client.chat.completions.create({
      model: "x-ai/grok-3-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `
          Available apps:
          ${appsContext}
          User query: ${userQuery}
`
        }
      ],
      response_format: {
        type: "json_object",
      }
    });

    const { message, apps } = JSON.parse(response.choices[0].message.content);
    const suggestedApps = appsJson.filter(a => apps.includes(a.name));
    suggestedApps && suggestedApps.length > 0 ? res.status(200).json({ message, suggestedApps }) : res.status(200).json({ message: 'No apps found' });  
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
