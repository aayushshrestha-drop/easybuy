require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const hitCountMiddleware = require('./middleware/hit-count.middleware');
const appRouter = require('./routes/app.route');
const chatRouter = require('./routes/chat.route');
const paymentRouter = require('./routes/payment.route');

const app = express();
app.set('trust proxy', true);

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';


// Enable CORS for corsOrigin
app.use(cors({
  origin: corsOrigin
}));

// Middleware to parse JSON
app.use(express.json());

// Hit count tracking middleware
app.use(hitCountMiddleware);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use('/app', appRouter);
app.use('/chat', chatRouter);
app.use('/payment', paymentRouter);



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, host, () => {
  console.log(`Example app listening on host ${host} and port ${port}`);
});