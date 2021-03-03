import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import style from "../css/deals.module.css";

const Deals = () => {
  const { cars } = useContext(CarContext);
  console.log(cars);
  return (
    <div className={style.dealsContainer}>
      {/* ADD HEADER  COMP HERE */}
      <div className={style.header}>
        <h1>Quality Deals</h1>
      </div>
      {/* -------------------- */}

      <div className={style.grid}>
        {/* ADD CARD COMPONENT HERE + IMPORT STYLES FOR CARD. FILTER OUT COMPONENTS THAT HAS DISCOUNTED = TRUE */}
        {cars.map((car, i) => (
          <div  key={i} className={style.card}>
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
        ))}
      </div>
    </div>
  );
}
 
export default Deals;