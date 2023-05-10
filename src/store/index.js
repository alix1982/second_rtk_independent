import {configureStore} from '@reduxjs/toolkit';
import formSlice from './formSlice';
import cardSlice from './cardSlice';

export default configureStore({
  reducer:{
    form: formSlice,
    card: cardSlice,
  },
})