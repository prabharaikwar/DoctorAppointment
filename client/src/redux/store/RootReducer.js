import { combineReducers } from "redux";
import AppointmentReducer from "../reducers/AppointmentReducer";
import DoctorReducer from "../reducers/DoctorReducer";

const rootReducer = combineReducers({
  app: AppointmentReducer,   
  doctor: DoctorReducer, 

});

export default rootReducer;
