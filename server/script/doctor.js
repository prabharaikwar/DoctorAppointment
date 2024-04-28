const mongoose = require('mongoose');
const Doctor = require('../model/DoctorModel');

// Increase timeout for MongoDB connection
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  socketTimeoutMS: 30000, // 30 seconds timeout
});

const newDoctor = new Doctor({
  _id: new mongoose.Types.ObjectId(),
  doctorName: 'Dr. John Doe (MBBS)',
  locationName: 'Bangalore', // Corrected city name spelling
});

newDoctor.save()
  .then((doctor) => console.log('Doctor saved:', doctor))
  .catch((error) => console.error('Error saving doctor:', error));
