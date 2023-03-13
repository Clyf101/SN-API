const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', require('./controllers/userController'));
app.use('/api/thoughts', require('./controllers/thoughtController'));

// Connect to MongoDB database using Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

// Log MongoDB errors to console
mongoose.connection.on('error', err => console.log(`MongoDB connection error: ${err}`));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
