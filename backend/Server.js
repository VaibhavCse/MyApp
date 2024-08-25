// Import required packages
const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();  // Load environment variables from .env file

// Fetch MongoDB URI from environment variables
const MONGO_URI = process.env.MONGO_URI;

// Check if MongoDB URI is defined
if (!MONGO_URI) {
  console.error('MongoDB URI is missing!');
  process.exit(1);  // Exit the process if the URI is missing to prevent further issues
}

// Connect to MongoDB using mongoose
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,       // Use the new MongoDB connection string parser
  useUnifiedTopology: true,    // Opt into the MongoDB driver's unified topology layer
}).then(() => {
  console.log('Connected to MongoDB');  // Log success message
}).catch((error) => {
  console.error('Failed to connect to MongoDB', error);  // Log error and exit if connection fails
  process.exit(1);  // Terminate the process to prevent running in a broken state
});

// Add middleware and routes here (if any)

// Start the Express server on port 5000
app.listen(5000, () => {
  console.log('Server is running on port 5000');  // Log success message when server is up and running
});
