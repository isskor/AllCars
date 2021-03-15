import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import { Link } from 'react-router-dom';
import CarCard from '../components/CarCard';

import Banner from '../components/Banner';
import style from '../css/deals.module.css';

const Deals = () => {
  const { cars } = useContext(CarContext);
  const discountedCars = [];

  cars.forEach((car) => {
    if (car.discounted) {
      discountedCars.push(car);
    }
  });

  /* Don' remember how to do filter, been awhile, but this work. */

  return (
    <div className={style.dealsContainer}>
      <Banner 
        header={"Quality Deals"} 
        imgSrc={"/assets/background/allcars_deals.jpg"} 
        altText={"Woman driving vintage car"}
        className={style.header} 
      />

      <div className={style.grid}>
        {discountedCars.map((car) => (
          <CarCard car={car} key={car.vin} />
        ))}
      </div>

      <div className={style.link}>
        <Link to='/'>
          <button> All Cars</button>
        </Link>
      </div>
    </div>
  );
};

export default Deals;
