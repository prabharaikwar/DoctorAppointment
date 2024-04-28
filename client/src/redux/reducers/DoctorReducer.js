import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAvailbleDoctors,bookAppointment } from "../../helper/ApiHelper";

export const allDoctorsAsync = createAsyncThunk(
  'doctors/allDoctors',
  async (city) => {
    try {
      const response = await getAvailbleDoctors(city);
      console.log(response.data.data,'list');
      return response.data.data;      
    } catch (error) {
      throw error;
    }
  }
);


export const BookAppointmentAsync = createAsyncThunk(
  'booking/appointment',
  async (clientData) => {
    try {
      const response = await bookAppointment(clientData);
      console.log(response.data.data,'singleDoctor');
      return response.data.data;      
    } catch (error) {
      throw error;
    }
  }
);


export const doctorSlice = createSlice({
  name: 'doctor',
  initialState: {
    doctors: [],
    selectedDoctor: null,
    loading: false,
    error: null
  },
  reducers: {
    setSelectedDoctor: (state, action) => {
      state.selectedDoctor = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(allDoctorsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(allDoctorsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
        state.error = null;
      })
      .addCase(allDoctorsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(BookAppointmentAsync.fulfilled, (state, action) => {
        state.selectedDoctor = action.payload;
      });
  },
});

// Export the reducer
export const { setSelectedDoctor } = doctorSlice.actions;
export const selectSelectedDoctor = state => state.doctor.selectedDoctor;

export default doctorSlice.reducer;
