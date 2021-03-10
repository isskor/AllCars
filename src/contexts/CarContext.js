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
    let arrayToLoop = cars;
    if (filteredCarsObject.search) {
      arrayToLoop = handleSearchInput(arrayToLoop, filteredCarsObject.search);
    }

    return arrayToLoop.filter((car) => {
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

  const handleSearchInput = (listToLoop, search) => {
    return listToLoop.filter((car) => {
      return (
        car.make.toLowerCase().includes(search.toLowerCase()) ||
        car.model.toLowerCase().includes(search.toLowerCase()) ||
        car.year.toString().includes(search.toLowerCase())
      );
    });
  };

  const handleFilteredCars = (stateToFilter, filterObject) => {
    const { categories, price, milage, search } = filterObject;

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
    if (search) {
      newCarList = handleSearchInput(newCarList, search);
    }

    setFilteredCars(newCarList);
  };

  useEffect(() => {
    handleFilteredCars(cars, filteredCarsObject);
    handleNewFilters();
    
  }, [filteredCarsObject]);

  // useEffect(() => {
  // }, [filteredCars]);

  return (
    <Provider
      value={{ cars, filters, dispatch, filteredCars, filteredCarsObject }}
    >
      {children}
    </Provider>
  );
};

export default CarContextProvider;
