import AutoItem from "./AutoItem";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {addAutosForm} from '../store/formSlice';
import {sortAutosCard} from '../store/cardSlice';

const AutoList = () => {
  const autosCard = useSelector(state => state.card.autosCard);
  let ratingItem = useSelector(state => state.card.ratingAuto)
  const [isEditAutosForm, setIsEditAutosForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(sortAutosCard());
  })

  useEffect(()=>{
    dispatch(addAutosForm({autosCard}));
    setIsEditAutosForm(false);
  },[isEditAutosForm]);

  // useEffect(()=>{
  //   if (isEditAutosForm) {
  //     dispatch(addAutosForm({autosCard}));
  //     setIsEditAutosForm(false);
  //   }
  // },[autosCard.length, ratingItem]);

  return (
    <ul>
      {autosCard.map((auto) =>
        <AutoItem
          key={auto.id} {...auto}
          // auto={auto}
          // ratingItem = {props.ratingItem} setRatingItem={props.setRatingItem}
          // autos={props.autos} setAutos={props.setAutos}
          // editRating={props.editRating}
          setIsEditAutosForm={setIsEditAutosForm}
        />
      )}
    </ul>
  )
}
export default AutoList;