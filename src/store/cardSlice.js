import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: 'cardSlice',
  initialState: {
    autosCard: [],
    ratingAuto: '',
  },
  reducers: {
    addAutosCard (state, action) {
      state.autosCard = action.payload.autosForm
    },
    sortAutosCard (state, action) {
      state.autosCard.sort((b, a) => a.rating-b.rating)
    },
    editRating (state, action) {
      state.ratingAuto = action.payload.e.target.value
    },
    saveRating (state, action) {
      state.autosCard.forEach((item, index) => {
        console.log('cicle');
        (item.id === action.payload.id) && (state.autosCard[index].rating = state.ratingAuto);
      })
      state.ratingAuto = '';
    },
    deleteAuto (state, action) {
      state.autosCard = action.payload.autosForm.filter((item)=>item.id !== action.payload.id);
    }
  }
})

export const {addAutosCard, sortAutosCard, editRating, saveRating, deleteAuto} = cardSlice.actions;
export default cardSlice.reducer