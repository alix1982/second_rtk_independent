// import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {editRating, saveRating, deleteAuto} from '../store/cardSlice';
// import {addAutosForm} from '../store/formSlice';

const AutoItem = ({setIsEditAutosForm, setAutos, setRatingItem, auto, id, carName, mileage, rating }) => {

  const autosForm = useSelector(state => state.form.autosForm);
  // const autosCard = useSelector(state => state.card.autosCard);
  let ratingItem = useSelector(state => state.card.ratingAuto)

  const dispatch = useDispatch();

  return (
    <li className='item'>
      <p className='item__point'>Название авто: {carName}</p>
      <p className='item__point'>Мой пробег: {mileage}</p>
      <p className='item__point'>Рейтинг: {rating}</p>
      {/* <p className='item__point'>Рейтинг: {ratingItem !== '' ? '' : rating}</p> */}
      <label className='item__blockRating'>
        <span>add rating</span>
        <input className='item__rating' type='number' value={ratingItem} onChange={(e)=>{dispatch(editRating({e}))}}/>
        <button className='item__save' onClick={()=>{
          dispatch(saveRating({id}))
          setIsEditAutosForm(true);
        }}>Save rating</button>
      </label>
      <button className='item__delete' onClick={()=>{
        dispatch(deleteAuto({id, autosForm}));
        setIsEditAutosForm(true);
        // dispatch(addAutosForm({autosCard}));
      }}>Delete</button>
      <br/><br/>
    </li>
  )
}

export default AutoItem;