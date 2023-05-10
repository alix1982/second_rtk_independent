import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'formAddAuto',
  initialState: {
    autosForm: [],
    car: '',
    mileage: '',
    rating: '',
  },
  reducers: {
    addAutosForm (state, action) {
      state.autosForm = action.payload.autosCard
    },
    handleCarName (state, action) {
      state.car = action.payload.e.target.value;
    },

    handleMileage (state, action) {
      state.mileage = action.payload.e.target.value;
    },

    handleRating (state, action) {
      state.rating = action.payload.e.target.value;
    },

    handleSubmit (state, action) {
       // action.payload.e.preventDefault();
      state.autosForm.push({
          id: new Date().toISOString(),
          carName: state.car,
          mileage: state.mileage,
          rating: state.rating,
      });
      state.car = '';
      state.mileage = '';
      state.rating = '';
    }
  },
})

export const {addAutosForm, handleCarName, handleMileage, handleRating, handleSubmit} = formSlice.actions;
export default formSlice.reducer