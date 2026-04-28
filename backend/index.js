require('dotenv').config();
const express = require('express');
const cors = require('cors');
const appRouter = require('./routes/app.route');
const chatRouter = require('./routes/chat.route');



const app = express();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:4200';


// Enable CORS for corsOrigin
app.use(cors({
  origin: corsOrigin
}));

// Middleware to parse JSON
app.use(express.json());

app.use('/app', appRouter);
app.use('/chat', chatRouter);



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, host, () => {
  console.log(`Example app listening on host ${host} and port ${port}`);
});