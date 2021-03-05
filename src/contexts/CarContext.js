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

  const filterCars = (state, filterType, filterItem) => {
    console.log(filterItem);
    console.log(filterType);
    const filteredCars = state.filter((car) => car[filterType] === filterItem);
    // const index = filters.findIndex((list) => list.type === 'Make');
    setFilters([
      {
        type: 'Make',
        list: getFilters('make', filteredCars),
        active: filterType === 'make' ? filterItem : filters[0].active,
      },
      {
        type: 'Model',
        list: getFilters('model', filteredCars),
        active: filterType === 'model' ? filterItem : filters[1].active,
      },
      {
        type: 'Year',
        list: getFilters('year', filteredCars),
        active: filterType === 'year' ? filterItem : filters[2].active,
      },
    ]);

    return filteredCars;
  };

  const searchReducer = (state, action) => {
    switch (action.type) {
      case 'FILTER_ACTION':
        console.log(action);
        return filterCars(
          state,
          action.payload.filterCategory,
          action.payload.filterItem
        );
      case 'RESET_FILTERS_ACTION':
        setFilters(filterList());
        return cars;

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
