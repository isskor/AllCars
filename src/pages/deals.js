import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import {Link} from 'react-router-dom';
import CarCard from '../components/CarCard';

import DealsBanner from '../components/DealsBanner';
import style from "../css/deals.module.css";

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
        {discountedCars.map((car) => (
           <CarCard car={car} key={car.vin}/>
          ))
        }
      </div>

      <Link to="/" className={style.link}>
        <button >Search..</button>
      </Link>
    </div>
  );
}
 
export default Deals;