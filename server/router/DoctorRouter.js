const express = require("express");
const doctors_route = express();
const bodyParser = require("body-parser");
const cors = require("cors");

doctors_route.use(bodyParser.json());
doctors_route.use(bodyParser.urlencoded({ extended: true }));

const doctorController = require('../controller/DoctorController');
doctors_route.use(cors());

//creating routes
doctors_route.get('/doctors', cors(), doctorController.getDoctorsByLocation);
doctors_route.post('/booking', cors(), doctorController.bookingAppointment);
doctors_route.post('/login', cors(), doctorController.loginUser);
doctors_route.post('/signup', cors(), doctorController.registerUser);
doctors_route.post('/doctorBy', cors(), doctorController.doctorByLocation);

module.exports = doctors_route;

