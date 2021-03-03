import style from "../css/deals.module.css";

const tempCard = ({car}) => {

  return (
    <div className={style.card}>
      <div className={style.cardImg}>
        <h3 className={style.cardPrice}>{car.price}</h3>
        <h3 className={style.cardTitle}>{car.make}</h3>
      </div>
      <div className={style.cardStats}>
        <h3>Model</h3>
        <h3 className={style.cardModel}>{car.model}</h3>
        <h3>Miles</h3>
        <h3 className={style.cardMiles}>{car.miles}</h3>
        <button className={style.cardBtn}></button>
      </div>
    </div>
  );
}
 
export default tempCard;