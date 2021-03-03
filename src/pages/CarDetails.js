import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CarContext } from "../contexts/CarContext";
import styles from  '../css/CarDetails.module.css'; 



function CarDetails(props) {
  const [car, setCar] = useState(null);
  const { cars } = useContext(CarContext);

  const theCars = cars.map((car) => {
      return {
        ...car,
        image: `../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`,
      }
    });

  useEffect(() => {
    if (theCars) {
       setCar(
            theCars.find((car) => props.match.params.id === car.id)
      );
    }
  }, [theCars]);


  const renderCar = () => {
    return (
      <div className="car">
        <div className="image-container">
        <img src={car.image} alt={car.name} />
        </div>
        <div className="container">
          <span className="make">{car.make}</span>
          <div className="make row">
            <span>Make: {car.make}</span>
          </div>
          <div className="model row">
            <span>Model: {car.model}</span>
          </div>
          <div className="year row">
            <span>Year {car.year}</span>
          </div>
          <div className="price row">
            <span>Price {car.price}</span>
          </div>
          <div className="miles row">
            <span>Miles {car.miles}</span>
          </div>
          <span className="long-desc">{car.longDesc}</span>
        </div>
        <NavLink className="back" to="/">
          Back
        </NavLink>
      </div>
    );
  };


  return car ? renderCar() : <div></div>;
}


export default CarDetails;
