import { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CarContext } from '../contexts/CarContext';
import styles from '../css/CarDetails.module.css';
import AddToCartButton from '../components/AddToCart';
import FooterNavBar from '../components/FooterNavbar';

function CarDetails(props) {
  const { cars } = useContext(CarContext);
  const [car, setCar] = useState(cars[0]);

  // not needed, slows network by loading all images we only need one
  // good approach but we should put this in context instead and load it all
  const theCars = cars.map((car) => {
    return {
      ...car,
      image: `../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`,
    };
  });

  // useEffect(() => {
  //   if (theCars) {
  //     setCar(
  //       theCars.find((car) => props.match.params.id === car.id)
  //     );
  //   }
  // }, [theCars]);

  const renderCar = () => {
    return (
      <div className='car'>
        <NavLink className='back' to='/'>
          Back
        </NavLink>
        <div className={styles.carImageContainer}>
          {/* added image src here directly */}
          <img
            src={`../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
            alt={car.name}
          />
          <div className={styles.cartButton}>
            <AddToCartButton car={car} />
          </div>
        </div>
        <div className={styles.carStatsContainer}>
          <div className={styles.carDescriptionShort}>{car.descShort}</div>
          <div className={styles.carPriceLabel}>{car.price}</div>
          <div className={styles.carMake}>
            <span>Make: {car.make}</span>
          </div>
          <div className={styles.carModel}>
            <span>Model: {car.model}</span>
          </div>
          <div className={styles.carYear}>
            <span>Year {car.year}</span>
          </div>
          <div className={styles.carMileage}>
            <span>Mileage {car.miles}</span>
          </div>
          <div className={styles.carVIN}>
            <span>VIN {car.vin}</span>
          </div>
          <div className={styles.carCity}>
            <span>City {car.city}</span>
          </div>
          <span className={styles.carLongDescription}>{car.descLong}</span>
        </div>
        <div className={styles.cartButton}>
          <AddToCartButton car={car} />
        </div>
        <div className={styles.footerNav}>
          <FooterNavBar/>
        </div>
      </div>
    );
  };

  return car ? renderCar() : <div></div>;
}

export default CarDetails;
