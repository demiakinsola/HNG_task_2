const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const connectDB = require('./config/connectDB');
connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api', require('./routes/personRoute'));




mongoose.connection.once('open', () => {
    console.log('Database connection successful !');
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    })
})

