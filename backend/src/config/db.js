const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI =  process.env.MONGO_URI || 'mongodb+srv://jashanphutela4u:Aman0709rj@cluster0.c7354qo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/crypto_tracker';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
