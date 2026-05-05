const express = require('express');
const router = express.Router();
const axios = require('axios');

const PI_API_URL = process.env.PI_API_URL;
const PI_API_KEY = process.env.PI_API_KEY;

// Endpoint to approve a payment on the server side
router.post('/approve', async (req, res) => {
  const { paymentId } = req.body;
  
  try {
    // In a real app, you would verify the payment details here
    // For now, we just call the Pi API to approve it
    await axios.post(`${PI_API_URL}/payments/${paymentId}/approve`, {}, {
      headers: { 'Authorization': `Key ${PI_API_KEY}` }
    });
    console.log(`Payment ${paymentId} approved`);
    
    res.status(200).json({ message: 'Payment approved' });
  } catch (error) {
    console.error('Error approving payment:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to approve payment' });
  }
});

// Endpoint to complete a payment on the server side
router.post('/complete', async (req, res) => {
  const { paymentId, txid } = req.body;
  
  try {
    await axios.post(`${PI_API_URL}/payments/${paymentId}/complete`, { txid }, {
      headers: { 'Authorization': `Key ${PI_API_KEY}` }
    });
    console.log(`Payment ${paymentId} completed`);
       
    res.status(200).json({ message: 'Payment completed' });
  } catch (error) {
    console.error('Error completing payment:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to complete payment' });
  }
});

module.exports = router;
