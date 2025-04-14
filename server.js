const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mongomingle')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 