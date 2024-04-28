const express= require("express");
const app = express();

const doctorRouter = require("./router/DoctorRouter");
const dotenv = require('dotenv');


app.use('/',doctorRouter);

//cofiguration
dotenv.config();

const mongoose = require("mongoose");
mongoose
.connect(process.env.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("connected to db"))
.catch((err) => console.log(err));


app.listen(4000,()=>{
    console.log('server started at http://localhost:4000');
})