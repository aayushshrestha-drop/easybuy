const HitCount = require('../models/hit-count.model');

const trackHit = async (req, res, next) => {
  try {
    const ip =
      req.headers['x-real-ip'] ||
      req.headers['x-forwarded-for']?.split(',')[0].trim() ||
      req.ip ||
      req.socket.remoteAddress ||
      'unknown';
    
    const hitCount = new HitCount({
      ip,
      browser: req.headers['user-agent'] || 'unknown',
      timestamp: new Date(),
      pi_user: req.headers['x-pi-user'] || 'guest' // Adjust based on how you pass pi_user
    });
    await hitCount.save();


    const count = await HitCount.countDocuments();
    //console.log(`Hit tracked: ${ip} - ${req.originalUrl}`);
    console.log(`Hit Count: ${count}`);
  } catch (err) {
    console.error('Failed to track hit:', err.message);
  }
  next();
};

module.exports = trackHit;
