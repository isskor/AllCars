import { useState, createContext, useReducer } from 'react';
import carsJSON from '../json/cars.json';
import { initialCarState, searchReducer } from './SearchReducer';
// fetch data
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
// filter lists
const getFilters = (type, list = carList) => {
  const filterSet = new Set(list.map((c) => c[type]));
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

const handlePriceRange = (state, min, max) => {
  // filtersearchedCars
  // filter method
  // set new searched cars
  return state.filter((item) => item.price >= min && item.price <= max);
};
const handleMilageRange = (state, min, max) => {
  // filtersearchedCars
  // filter method
  // set new searched cars
  return state.filter((item) => item.miles >= min && item.miles <= max);
};

export const CarContext = createContext();

const CarContextProvider = ({ children }) => {
  const { Provider } = CarContext;
  const [cars, setCars] = useState(carList);
  const [filters, setFilters] = useState(filterList());
  const [filteredCars, setFilteredCars] = useState(cars);
  const [filteredCarsState, dispatch] = useReducer(
    searchReducer,
    initialCarState
  );

  const handleFilteredCars = (stateToFilter, filterObject) => {
    return;
  };

  handleFilteredCars(filteredCars, filteredCarsState);
  console.log(filteredCarsState);
  return (
    <Provider value={{ cars, filters, dispatch, filteredCars }}>
      {children}
    </Provider>
  );
};

export default CarContextProvider;
