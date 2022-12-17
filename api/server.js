const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

const polishRouter = require('./routes/polish');

// get whatever database connection is in use
const DATABASE_URL = process.env.DATABASE_URL 

mongoose.connect(DATABASE_URL, { useNewUrlParser: true }); 
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log("Database Connection Established"));

app.use(express.json());
app.use('/api/v1/polish', polishRouter);

// look in the react build for static build
app.use(express.static(path.join(__dirname, '../reactjs/build')));

// for any routes not defined by the api, assume it's a direct request to a client-side route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../reactjs/build', 'index.html'))
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});