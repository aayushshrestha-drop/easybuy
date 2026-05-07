const HitCount = require('../models/hit-count.model');

const trackHit = async (req, res, next) => {
  try {
    const hitCount = new HitCount({
      ip: req.ip || 'unknown',
      browser: req.headers['user-agent'] || 'unknown',
      timestamp: new Date(),
      pi_user: req.headers['x-pi-user'] || 'guest' // Adjust based on how you pass pi_user
    });
    await hitCount.save();
    console.log(`Hit tracked: ${req.ip} - ${req.originalUrl}`);
  } catch (err) {
    console.error('Failed to track hit:', err.message);
  }
  next();
};

module.exports = trackHit;
