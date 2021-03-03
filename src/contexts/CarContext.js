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
const getFilters = (type) => {
  const filterSet = new Set(carList.map((c) => c[type]));
  if (type === 'year') {
    const newFilters = [...filterSet].sort((a, b) => (a > b ? -1 : 1));

    return newFilters;
  }
  const newFilters = [...filterSet].sort((a, b) => (a < b ? -1 : 1));
  return newFilters;
};

const filterList = () => {
  return [
    {
      type: 'Make',
      list: getFilters('make'),
    },
    {
      type: 'Model',
      list: getFilters('model'),
    },
    {
      type: 'Year',
      list: getFilters('year'),
    },
  ];
};
export const CarContext = createContext();

// const searchReducer(state, action) => {

// }

const CarContextProvider = ({ children }) => {
  const { Provider } = CarContext;
  const [cars, setCars] = useState(carList);
  const [filters, setFilters] = useState(filterList());
  // const [cars, dispatch] = useReducer(searchReducer, cars)

  return <Provider value={{ cars, filters }}>{children}</Provider>;
};

export default CarContextProvider;
