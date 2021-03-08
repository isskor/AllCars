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

  const newFiltersHelper = (filterTypeOne, filterTypeTwo) => {
    console.log('newfilters');
    console.log(filters);
    console.log(filteredCarsObject);
    console.log(cars);
    return cars.filter((car) => {
      if (
        filteredCarsObject.categories[filterTypeOne].length > 0 ||
        filteredCarsObject.categories[filterTypeTwo].length > 0
      ) {
        return (
          filteredCarsObject.categories[filterTypeOne].includes(
            car[filterTypeOne]
          ) ||
          filteredCarsObject.categories[filterTypeTwo].includes(
            car[filterTypeTwo]
          )
        );
      }
      return car;
    });
  };

  const handleNewFilters = () => {
    setFilters([
      {
        type: 'Make',
        list: getFilters('make', newFiltersHelper('model', 'year')),
      },
      {
        type: 'Model',
        list: getFilters('model', newFiltersHelper('make', 'year')),
      },
      {
        type: 'Year',
        list: getFilters('year', newFiltersHelper('make', 'model')),
      },
    ]);
  };

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
        (car) =>
          (car.miles >= milage.min && car.miles <= milage.max) || !car.miles
      );
    }
    if (categories.make.length) {
      newCarList = newCarList.filter((car) => {
        return categories.make.includes(car.make);
      });
    }
    if (categories.model.length) {
      newCarList = newCarList.filter((car) => {
        return categories.model.includes(car.model);
      });
    }
    if (categories.year.length) {
      newCarList = newCarList.filter((car) => {
        return categories.year.includes(car.year);
      });
    }

    setFilteredCars(newCarList);
  };

  useEffect(() => {
    handleFilteredCars(cars, filteredCarsObject);
    handleNewFilters();
  }, [filteredCarsObject]);

  // useEffect(() => {
  // }, [filteredCars]);

  console.log(filteredCarsObject);
  console.log(filteredCars);

  return (
    <Provider
      value={{ cars, filters, dispatch, filteredCars, filteredCarsObject }}
    >
      {children}
    </Provider>
  );
};

export default CarContextProvider;
