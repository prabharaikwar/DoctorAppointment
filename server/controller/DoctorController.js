const AvailbleDoctor = require("../model/DoctorModel");
const Login = require("../model/LoginUserModel");
const SignUp = require("../model/RegisterUserModel");
const BookingAppointment = require("../model/BookingAppointmentModel");


const getDoctorsByLocation = async (req, res) => {
  const { locationName } = req.query;
  try {
    const doctors = await AvailbleDoctor.find({ locationName });
    res.status(200).json({ success: true, data: doctors });
    console.log(locationName ,'hhhhh');    
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const bookingAppointment = async (req, res) =>{
  const { patientName, appointmentType, treatment } = req.body;
  try {
    const existingAppointment = await BookingAppointment.findOne({ patientName });
    if (existingAppointment) {
      return res.status(400).json({ success: false, message: "This patient's booking is already Booked"});
    }
    const newBookingAppointment = new BookingAppointment({ patientName, appointmentType, treatment});
    await newBookingAppointment.save();
    res.status(201).json({ success: true, data: newBookingAppointment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


  const registerUser = async (req, res) => {
    const { fullName, email, password, confirmPassword } = req.body;
    try {
      const existingUser = await SignUp.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'This email is already registered' });
      }
      const newSignUp = new SignUp({ fullName, email, password, confirmPassword });
      await newSignUp.save();
      res.status(201).json({ success: true, data: newSignUp });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await Login.findOne({ email });
      if (!user) {
        return res.status(400).json({ success: false, message: 'User not found' });
      }
      const isValidPassword = await user.comparePassword(password);
      if (!isValidPassword) {
        return res.status(400).json({ success: false, message: 'Incorrect password' });
      }
      res.status(200).json({ success: true, message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  const doctorByLocation = async (req, res) => {
    const { doctorName, locationName, area } = req.body;
    try {
      const existingDoctor = await AvailbleDoctor.findOne({ doctorName, locationName });
      if (existingDoctor) {
        return res.status(400).json({ success: false, message: 'This doctor is already available at this location' });
      }
      const newDoctor = new AvailbleDoctor({ doctorName, locationName, area });
      await newDoctor.save();
      console.log('data saved in db');
      res.status(201).json({ success: true, data: newDoctor });
    } catch (error) {
      if (error.code === 11000 && error.keyPattern.locationName) {
        // Duplicate key error
        return res.status(400).json({ success: false, message: 'Duplicate doctor location' });
      }
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  
  module.exports = {
    getDoctorsByLocation,
    registerUser,
    loginUser,
    doctorByLocation,
    bookingAppointment
  };

 