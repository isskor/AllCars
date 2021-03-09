import { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CarContext } from '../contexts/CarContext';
import styles from '../css/CarDetails.module.css';
import AddToCartButton from '../components/AddToCart';
import FooterNavBar from '../components/FooterNavbar';
import { ArrowLeftOutlined } from '@ant-design/icons';
import ReadMoreReact from 'read-more-react';

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
          <section className={styles.carImageContainer}>
            {/* added image src here directly */}
            <NavLink className={styles.backButton} to='/'>
              <ArrowLeftOutlined />
            </NavLink>
            <img
              src={`../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
              alt={car.name}
            />
            <h2 className={styles.carMakeModelName}><span>{car.make} {car.model}: Only {car.price.toLocaleString('en')}! </span></h2>
            <div className={styles.cartButtonTop}>
              <AddToCartButton car={car} />
            </div>
          </section>
          <div className={styles.carTextDetailsContainer}>
            <section className={styles.carStatsContainer}>
              <div className={styles.carDescriptionShort}><p>{car.descShort}</p></div>
              <h2 className={styles.carStatsTitle}>Car Stats</h2>
              <section className={styles.carStats}>
                <div className={styles.carMake}>
                  <p className={styles.carAttribute}><span>Make:</span></p> <p className={styles.carValue}><span>{car.make}</span></p>
                  {/* <div className={styles.spacingDiv}></div> */}
                </div>
                <div className={styles.carModel}>
                  <p className={styles.carAttribute}><span>Model:</span> </p> <p className={styles.carValue}><span> {car.model}</span></p>
                </div>
                <div className={styles.carYear}>
                  <p className={styles.carAttribute}><span>Year</span></p> <p className={styles.carValue}> <span> {car.year}</span></p>
                </div>
                <div className={styles.carMileage}>
                  <p className={styles.carAttribute}><span>Mileage</span></p> <p className={styles.carValue}> <span> {car.miles}</span></p>
                </div>
                <div className={styles.carVIN}>
                  <p className={styles.carAttribute}>
                    <span>VIN</span> </p>
                  <p className={styles.carValue}>
                    <span> <ReadMoreReact
                      className="styles.VINReadMoreText"
                      text={ car.vin }
                      min={4}
                      ideal={6}
                      max={8}
                      readMoreText={"..."}
                    /></span></p>
                </div>
                <div className={styles.carCity}>
                  <p className={styles.carAttribute}><span>City </span></p> <p className={styles.carValue}> <span>{car.city}</span></p>
                </div>
              </section>
            </section>
            <section className={styles.carPriceDescContainer}>
              <h3 className={styles.carPriceLabel}>Price</h3>
              <div className={styles.carPrice}><p>{car.price.toLocaleString('en')}</p></div>
              <h2 className={styles.carDescriptionTitle}>Description</h2>
              <div className={styles.carLongDescription}><p>{car.descLong}</p></div>
            </section>
          </div>
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
