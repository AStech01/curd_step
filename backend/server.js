const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const studentRoutes=require("../backend/routes/studentRoutes")

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/student', studentRoutes);

const PORT = process.env.PORT || 3000;


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('mongodb connected');
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
    process.exit(1);
  });