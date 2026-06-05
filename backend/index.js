const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require('./routes/authRoutes.js');
dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.get("/", (req, res) => {
    res.send("E-commerce Project Backend is working properly!");
});


app.use('api/auth', require('./routes/authRoutes.js'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});