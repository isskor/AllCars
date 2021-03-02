import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CarContext } from "../contexts/CarContext";

import "../css/CarDetails.module.css";

function CarDetails(props) {
  const [car, setCar] = useState(null);
  const { cars } = useContext(CarContext);

 
  useEffect(() => {
    if (cars) {
       setCar(
            cars.find((car) => props.match.params.id === car.id)
      );
    }
  }, [cars]);

  
  const renderCar = () => {
    return (
      <div className="car">
        <div className="image-container">
          <img src={car.image} alt={car.make} />
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
