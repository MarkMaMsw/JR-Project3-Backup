import React from 'react';
import Style from './style.module.scss';


const FakeCard = (props) => {
  const {name, price, imgURL, imgAlt} = props;
  
  return(
    <div className={Style.card}>
      <img className={Style.card__img} src={imgURL} alt={imgAlt}></img>
      <h4 className={Style.card__title}>{name}</h4>
      <h4 className={Style.card__desc}>{price}</h4>
    </div>
  )
  
}



export default FakeCard;