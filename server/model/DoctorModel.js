const mongoose = require('mongoose');


const doctorSchema = new mongoose.Schema({
  locationName: { type: String, required: true },
  area:{ type: String},
  doctorName: { type: String , required: true },
});

module.exports = mongoose.model('Doctor', doctorSchema);

