const mongoose = require('mongoose');

// Define the database URI and options
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/my-social-network';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
};

// Connect to the database
mongoose.connect(dbURI, options)
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Error connecting to database:', err));

// Export the mongoose object for use in other modules
module.exports = mongoose;
