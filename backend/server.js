const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hearthealth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Anonymous Prediction Schema
const predictionSchema = new mongoose.Schema({
  age: { type: Number, required: true },
  cholesterol: { type: Number, required: true },
  bloodPressureTop: { type: Number, required: true },
  familyHistory: { type: Boolean, required: true },
  riskPercentage: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});
const Prediction = mongoose.model('Prediction', predictionSchema);

// API Endpoint: Risk Prediction
app.post('/api/predict-risk', async (req, res) => {
  try {
    const { age, cholesterol, bloodPressureTop, familyHistory } = req.body;

    if (!age || !cholesterol || !bloodPressureTop) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Forward to Python AI Service
    const aiResponse = await axios.post(`${process.env.PYTHON_AI_URL || 'http://localhost:5000'}/predict`, {
      age: parseInt(age),
      cholesterol: parseFloat(cholesterol),
      bloodPressureTop: parseInt(bloodPressureTop),
      familyHistory: familyHistory ? 1 : 0
    });

    const riskPercentage = aiResponse.data.risk;

    // Store anonymously in MongoDB
    const newPrediction = new Prediction({
      age,
      cholesterol,
      bloodPressureTop,
      familyHistory,
      riskPercentage
    });
    await newPrediction.save();

    // Determine risk level
    const riskLevel = riskPercentage < 30 ? 'Low' : riskPercentage < 70 ? 'Moderate' : 'High';

    res.json({ riskPercentage, riskLevel });
  } catch (error) {
    console.error('Prediction error:', error);
    res.status(500).json({ error: 'Failed to calculate risk. Please try again.' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => res.json({ status: 'OK' }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
