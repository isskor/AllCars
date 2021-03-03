import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';

import DealsBanner from '../components/DealsBanner';
import TempCard from '../components/tempCard';
import style from "../css/deals.module.css";

const Deals = () => {
  const { cars } = useContext(CarContext);
  const discountedCars = [];

  cars.forEach(car => {
    if (car.discounted) {
      discountedCars.push(car)
    }
  });


  return (
    <div className={style.dealsContainer}>
      <DealsBanner className={style.header}/>

      <div className={style.grid}>
        {/* ADD CARD COMPONENT HERE + IMPORT STYLES FOR CARD. FILTER OUT COMPONENTS THAT HAS DISCOUNTED = TRUE */}
        {discountedCars.map((car) => (
           <TempCard car={car} key={car.vin}/>
          ))}
      </div>
    </div>
  );
}
 
export default Deals;