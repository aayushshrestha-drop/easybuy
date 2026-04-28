require('dotenv').config();

//import OpenAI from "openai";
const express = require('express');
const cors = require('cors');
const appRouter = require('./routes/app.route');

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
const apps = [
    {name: 'Fireside', description: 'A chatbot for Pi Network users', category: 'Social Media'},
    {name: 'Blind Lounge', description: 'The official Pi Network app', category: 'Social Media'},
    {name: 'Thepitogo Services', description: 'The official Pi Network app', category: 'Lifestyle'},
    {name: 'Live TV', description: 'The official Pi Network app', category: 'Lifestyle'},
    {name: 'Piketplace', description: 'The official Pi Network app', category: 'Shopping'},
    {name: 'GPM GlobalPiMarket', description: 'The official Pi Network app', category: 'Shopping'},
    {name: 'Fruity Pi', description: 'The official Pi Network app', category: 'Gaming'},
    {name: 'Pet For Pi', description: 'The official Pi Network app', category: 'Gaming'},
]
const appsContext = apps.map(a =>
    `${a.name}: ${a.description} [${a.category}]`
).join("\n");
const userQuery = 'Hi';

// const client = new OpenAI({
//     apiKey: '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',
//     baseURL: "https://openrouter.ai/api/v1",
// });

// const response = await client.chat.completions.create({
//     model: "x-ai/grok-3-mini",
//     messages: [
//         { role: "system", content: SYSTEM_PROMPT },
//         {
//             role: "user",
//             content: `
// Available apps:
// ${appsContext}

// User query: ${userQuery}
// `
//         }
//     ],
//     response_format: {
//         type: "json_object",
//     }
// });

// console.log(response.choices[0].message.content);

const app = express();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';


// Enable CORS for corsOrigin
app.use(cors({
  origin: corsOrigin
}));

// Middleware to parse JSON
app.use(express.json());

app.use('/app', appRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, host, () => {
  console.log(`Example app listening on host ${host} and port ${port}`);
});