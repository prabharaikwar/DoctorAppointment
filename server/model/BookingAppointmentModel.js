const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  appointmentType: { type: String , required: true },
  treatment: {type: String , required: true}
});

module.exports = mongoose.model('Booking', bookingSchema);

