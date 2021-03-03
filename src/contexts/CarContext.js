import { Looks } from '@material-ui/icons';
import { useState, createContext, useReducer } from 'react';
import carsJSON from '../json/cars.json';

const carList = carsJSON.map((car, i) => {
  if (i < 3) {
    return {
      ...car,
      discounted: true,
    };
  }
  return {
    ...car,
    discounted: false,
  };
});
export const CarContext = createContext();

// const searchReducer(state, action) => {

// }

const CarContextProvider = ({ children }) => {
  const { Provider } = CarContext;
  const [cars, setCars] = useState(carList);
  // const [cars, dispatch] = useReducer(searchReducer, cars)

  return <Provider value={{ cars }}>{children}</Provider>;
};

export default CarContextProvider;
