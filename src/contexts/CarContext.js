import { useState, createContext, useReducer } from 'react';
import carsJSON from '../json/cars.json';

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

// const handleSearchInput = (inputText) => {
//   // filtersearchedCars
//   // filter method

//   // set new searched cars
//   setSearchedCars()
// }
const handlePriceRange = (min, max) => {
  // filtersearchedCars
  // filter method
  // set new searched cars
};
const handleMilageRange = (min, max) => {
  // filtersearchedCars
  // filter method
  // set new searched cars
};

export const CarContext = createContext();

const CarContextProvider = ({ children }) => {
  const { Provider } = CarContext;
  const [cars, setCars] = useState(carList);
  const [searchedCars, setSearchedCars] = useState(cars);
  const [filters, setFilters] = useState(filterList());

  const filterMake = (make) => {
    const filteredCars = carList.filter((car) => car.make === make);
    const index = filters.findIndex((list) => list.type === 'Make');

    return filteredCars;
  };
  // const filterModel = (model) => {
  //   const filteredModels = filterMake('Ford').filter(
  //     (car) => car.model === model
  //   );
  //   return filteredModels;
  // };
  // const filterYear = (year) => {
  //   // filter after year
  // };

  const searchReducer = (state, action) => {
    switch (action.type) {
      case 'filterMake':
        return filterMake(action.payload);

      default:
        return state;
    }
  };

  const [filteredCars, dispatch] = useReducer(searchReducer, cars);

  console.log(filteredCars);
  console.log(filters);
  return (
    <Provider value={{ cars, filters, dispatch, filteredCars }}>
      {children}
    </Provider>
  );
};

export default CarContextProvider;
