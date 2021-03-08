import { useState, createContext, useReducer, useEffect } from 'react';
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
  const [filteredCarsObject, dispatch] = useReducer(
    searchReducer,
    initialCarState
  );

  const handleFilteredCars = (stateToFilter, filterObject) => {
    const { categories, price, milage } = filterObject;

    let newCarList = stateToFilter;

    if (price) {
      newCarList = newCarList.filter(
        (car) => car.price >= price.min && car.price <= price.max
      );
    }
    if (milage) {
      newCarList = newCarList.filter(
        (car) => car.miles >= milage.min && car.miles <= milage.max
      );
    }
    setFilteredCars(newCarList);
  };

  useEffect(() => {
    handleFilteredCars(cars, filteredCarsObject);
  }, [filteredCarsObject]);

  return (
    <Provider value={{ cars, filters, dispatch, filteredCars }}>
      {children}
    </Provider>
  );
};

export default CarContextProvider;
