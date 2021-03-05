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
const maxMin = (min, max) => {};

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

  const searchReducer = (filteredCars, action) => {
    switch (action.type) {
      case 'FILTER_ACTION':
        return filterCars(
          filteredCars,
          action.payload.filterCategory,
          action.payload.filterItem
        );
      case 'RESET_FILTERS_ACTION':
        setFilters(filterList());
        return cars;
      case 'PRICE_RANGE_ACTION':
        // action.payload{min, max}
        return handlePriceRange(cars, action.payload.min, action.payload.max);

      case 'MILAGE_RANGE_ACTION':
        return handleMilageRange(cars, action.payload.min, action.payload.max);

      default:
        return filteredCars;
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

// filterObject : {
//   make: toyota
//   model: null
//   year: null
//   price:100, 200
//   milage:
//   Search:
// }
