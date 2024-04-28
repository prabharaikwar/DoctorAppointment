const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true }
});

module.exports = mongoose.model('RegisterUser', registerSchema);