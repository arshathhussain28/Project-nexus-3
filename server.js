// server.js

const express = require('express');
const mongoose = require('mongoose');
const customerRoutes = require('./routes/customers');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/customers', customerRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/nexus_info', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    // Start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('MongoDB connection error:', error.message);
});
