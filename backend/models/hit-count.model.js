const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hitCountSchema = new Schema({
  ip: {
    type: String,
    required: false
  },
  browser: {
    type: String,
    required: false
  },
  timestamp:{
    type: Date,
    required: true,
    default: Date.now
  },
  pi_user:{
    type: String,
    required: false
  }
});

module.exports = mongoose.model('HitCount', hitCountSchema);  
