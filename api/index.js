import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  // This loads .env from the root (where node is started)

const app = express();

mongoose.connect(process.env.MONGO)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.log('MongoDB connection error:', err));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});