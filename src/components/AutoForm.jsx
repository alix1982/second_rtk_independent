import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCarName, handleMileage, handleRating, handleSubmit } from "../store/formSlice";
import {addAutosCard} from '../store/cardSlice'

const AutoForm = () => {
  const dispatch = useDispatch();

  const car = useSelector(state => state.form.car);
  const rating = useSelector(state => state.form.rating);
  const mileage = useSelector(state => state.form.mileage);
  const autosForm = useSelector(state => state.form.autosForm);

  useEffect(()=>{
    dispatch(addAutosCard({autosForm}));
  },[autosForm.length]);

  return (
    <form className='form__auto'>
      <fieldset>
        <legend className='form__header'>your car</legend>
        <label>
          <p>Car brand</p>
          <input type='text' name='carName' value={car} onChange={(e)=>{dispatch(handleCarName({e}))} }/>
        </label>
        <label>
          <p>Add mileage</p>
          <input type="number" name='mileage' value={mileage} onChange={(e)=>{dispatch(handleMileage({e}))}}/>
        </label>
        <label>
          <p>Your car rating</p>
          <input type="number" name='rating' value={rating} min='0' max='5' onChange={(e)=>{dispatch(handleRating({e}))}}/>

        </label>
        <br/>
        <button onClick={(e)=>{
          e.preventDefault();
          dispatch(handleSubmit());
        }}>Submit</button>
      </fieldset>
    </form>
  )
}
export default AutoForm;