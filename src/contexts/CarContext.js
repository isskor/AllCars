import { useState, createContext } from 'react';
import carsJSON from '../json/cars.json';

const carList = carsJSON.map((car) => ({ ...car, discounted: false }));
export const CarContext = createContext();

const CarContextProvider = ({ children }) => {
  const { Provider } = CarContext;
  const [cars, setCars] = useState(carList);

  return <Provider value={{ cars }}>{children}</Provider>;
};

export default CarContextProvider;
