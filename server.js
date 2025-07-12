const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

require('./config/db'); // ✅ Updated path
const billRoutes = require('./routes/billRoutes');

app.use(express.json()); // ✅ Required for POST JSON
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/bill', billRoutes); // ✅ Mount bill API

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 App running at http://localhost:${PORT}`);
});
