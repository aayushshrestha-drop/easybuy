const express = require('express');
const router = express.Router();
const csv = require('csvtojson');
const path = require('path');

// Get all Apps
router.get('/', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'csv', 'apps.csv');

    const apps = await csv().fromFile(filePath);
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
