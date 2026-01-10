import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO)
  .then(() => console.log('→ Connected to MongoDB'))  
  .catch((err) => console.error('MongoDB connection error:', err));

const app = express();
app.get('/test', (req, res) => {
  res.json({ message: "This is a test endpoint", status: "working" });
});

app.listen(3000, () => {
  console.log('→ Server running on http://localhost:3000');
});
app.use('/api/users', userRoutes);