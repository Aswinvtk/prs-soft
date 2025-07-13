// backend/routes/billRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bill API working ✅');
});

module.exports = router;
