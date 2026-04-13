const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());



const SECRET_KEY = process.env.SECRET_KEY;
// Routes (combined)
// app.use('/api', require('./routes/api'));


// new route with controller working
const applyRoutes = require('./routes/applyRoutes');
app.use('/api', applyRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(5000, () => console.log('Server running on port 5000'));