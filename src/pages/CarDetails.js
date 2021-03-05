import { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CarContext } from '../contexts/CarContext';
import styles from '../css/CarDetails.module.css';
import AddToCartButton from '../components/AddToCart';
import FooterNavBar from '../components/FooterNavbar';
import { ArrowLeftOutlined } from '@ant-design/icons';

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
      <>
        <div className={styles.carDetailsContainer}>
          <NavLink className={styles.backButton} to='/'>
            <ArrowLeftOutlined />
        </NavLink>
          <section className={styles.carImageContainer}>
            {/* added image src here directly */}
            <img
              src={`../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
              alt={car.name}
            />
            <h1 className={styles.carMakeModelName}><span>Name {car.make} {car.model}</span></h1>
            <div className={styles.cartButton}>
              <AddToCartButton car={car} />
            </div>
          </section>
          <section className={styles.carStatsContainer}>
            <div className={styles.carDescriptionShort}><p>{car.descShort}</p></div>
            <h2 className={styles.carStatsTitle}>Car Stats</h2>
            <div className={styles.carMake}><p>
              <span>Make: {car.make}</span></p>
            </div>
            <div className={styles.carModel}>
              <p><span>Model: {car.model}</span></p>
            </div>
            <div className={styles.carYear}>
              <p><span>Year {car.year}</span></p>
            </div>
            <div className={styles.carMileage}>
              <p><span>Mileage {car.miles}</span></p>
            </div>
            <div className={styles.carVIN}>
              <p><span>VIN {car.vin}</span></p>
            </div>
            <div className={styles.carCity}>
              <p><span>City {car.city}</span></p>
            </div>
          </section>
          <section className={styles.carPriceLongDescContainer}>
            <h3 className={styles.carPrice}>Price</h3>
            <div className={styles.carPriceLabel}><p>{car.price}</p></div>
            <h2 className={styles.carDescriptionTitle}>Description</h2>
            <div className={styles.carLongDescription}><p>{car.descLong}</p></div>
          </section>
          <div className={styles.cartButton}>
            <AddToCartButton car={car} />
          </div>
          <div className={styles.footerNav}>
            <FooterNavBar />
          </div>
        </div>
      </>
    );
  };

  return car ? renderCar() : <div></div>;
}

export default CarDetails;
