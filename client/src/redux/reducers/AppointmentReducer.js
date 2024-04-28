import { createSlice } from '@reduxjs/toolkit';


const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
});

export const { increment, decrement, reducer:appointmentReducer } = appointmentSlice.actions;

export default appointmentSlice.reducer;
