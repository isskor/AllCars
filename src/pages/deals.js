import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';

import DealsBanner from '../components/DealsBanner';
import TempCard from '../components/tempCard';
import style from "../css/deals.module.css";
import CarCard from '../components/CarCard';

const Deals = () => {
  const { cars } = useContext(CarContext);
  const discountedCars = [];

  cars.forEach(car => {
    if (car.discounted) {
      discountedCars.push(car)
    }
  });

  /* Don' remember how to do filter, been awhile, but this work. */

  return (
    <div className={style.dealsContainer}>
      <DealsBanner className={style.header}/>

      <div className={style.grid}>
        {/* ADD CARD COMPONENT HERE + IMPORT STYLES FOR CARD. FILTER OUT COMPONENTS THAT HAS DISCOUNTED = TRUE */}
        {discountedCars.map((car) => (
           <CarCard car={car} key={car.vin}/>
          ))}
      </div>

      <button>Search..</button>
    </div>
  );
}
 
export default Deals;