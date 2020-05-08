const express = require('express');
const compress = require('compression');
const connectDB = require('./config/db');

const app = express();
app.use(compress());

// Connect DB
connectDB();

// Initialize Middleware
app.use(express.json( { extended: false }));

// Routes
app.use('/api/people', require('./routes/people'));


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
