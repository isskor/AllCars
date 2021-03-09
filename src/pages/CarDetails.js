import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CarContext } from '../contexts/CarContext';
import styles from '../css/CarDetails2.module.css';
import AddToCartButton from '../components/AddToCart';
import { ArrowLeftOutlined } from '@ant-design/icons';

function CarDetails(props) {
  const { cars } = useContext(CarContext);
  const [car, setCar] = useState(cars[0]);

  // useEffect(() => {
  //   if (theCars) {
  //     setCar(theCars.find((car) => props.match.params.id === car.id));
  //   }
  // }, [theCars]);

  const renderCar = () => {
    return (
      <>
        <div className={styles.carDetailsContainer}>
          <section className={styles.carImageContainer}>
            {/* added image src here directly */}
            <div className={styles.backButton}>
              <Link to='/'>
                <ArrowLeftOutlined />
              </Link>
            </div>
            <img
              src={`../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
              alt={car.name}
            />
            <h2 className={styles.carMakeModelName}>
              <span>
                {car.make} {car.model}: Only {car.price.toLocaleString('en')}!{' '}
              </span>
            </h2>
            <div className={styles.cartButtonTop}>
              <AddToCartButton car={car} />
            </div>
          </section>
          <div className={styles.car_details_container}>
            <section className={styles.main_info}>
              <div className={styles.price_container}>
                <h3 className={styles.carPriceLabel}>Price</h3>
                <p className={styles.carPrice}>
                  {car.price.toLocaleString('en')}
                </p>
              </div>
              <div className={styles.car_desc_short}>
                <p>{car.descShort}</p>
              </div>
            </section>
            <section className={styles.car_stats_container}>
              <h2 className={styles.carStatsTitle}>Car Stats</h2>
              <section className={styles.carStats}>
                <div className={styles.car_stat}>
                  <p className={styles.carAttribute}>Make</p>
                  <p className={styles.carValue}>{car.make}</p>
                </div>
                <div className={styles.car_stat}>
                  <p className={styles.carAttribute}>Model</p>
                  <p className={styles.carValue}>{car.model}</p>
                </div>
                <div className={styles.car_stat}>
                  <p className={styles.carAttribute}>Year</p>
                  <p className={styles.carValue}>{car.year}</p>
                </div>
                <div className={styles.car_stat}>
                  <p className={styles.carAttribute}>Mileage</p>
                  <p className={styles.carValue}>{car.miles}</p>
                </div>
                <div className={styles.car_stat}>
                  <p className={styles.carAttribute}>VIN</p>
                  <p className={styles.carValue}>{car.vin}</p>
                </div>
                <div className={styles.car_stat}>
                  <p className={styles.carAttribute}>City</p>
                  <p className={styles.carValue}>{car.city}</p>
                </div>
              </section>
            </section>
            <div className={styles.detail_line}></div>
            <section className={styles.car_desc_container}>
              <h2>Description</h2>
              <p>{car.descLong}</p>
            </section>
          </div>
          <div className={styles.cartButton}>
            <AddToCartButton car={car} />
          </div>
        </div>
      </>
    );
  };

  return car ? renderCar() : <div></div>;
}

export default CarDetails;
