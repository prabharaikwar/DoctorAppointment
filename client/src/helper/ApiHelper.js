import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
  };

export const getAvailbleDoctors =(city)=>{
    return axios.get(`http://localhost:4000/doctors?locationName=${city}`);
}

export const bookAppointment =(clientData) =>{
    return axios.post("http://localhost:4000/booking", clientData)
}
