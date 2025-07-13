// test-env.js
require('dotenv').config({ path: '../.env' }); // Load from parent
console.log('Loaded MONGO_URI:', process.env.MONGO_URI);
