import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import SearchForm from './SearchForm';
// import { CartContext } from '../contexts/CartContext';
const Test = () => {
  const { dispatch, filteredCars, filters } = useContext(CarContext);
  //   const { addToCart, cart } = useContext(CartContext);

  const handleDispatch = (filterCategory, filterItem) => {
    dispatch({
      type: 'FILTER_ACTION',
      payload: {
        filterCategory: filterCategory,
        filterItem: filterItem,
      },
    });
  };

  return (
    <div style={{ display: 'flex', paddingTop: '10rem' }}>
      {/* for testing, display cart length */}
      {/* <h2>cart items {cart.length}</h2> */}
      <div className='cars'>
        {filteredCars.map((car) => (
          <div key={car.vin}>
            {/* for testing, click on title to add to cart */}
            {/* <h1 onClick={() => addToCart(car)}>{car.make}</h1> */}
            <p onClick={() => handleDispatch('make', car.make)}>{car.make}</p>
            <p onClick={() => handleDispatch('model', car.model)}>
              {car.model}
            </p>
            <p onClick={() => handleDispatch('year', car.year)}>{car.year}</p>
            <p>{`${car.discounted}`}</p>
          </div>
        ))}
      </div>
      <div className='filters'>
        {filters.map((filter) => (
          <div>
            <p>{filter.type}</p>
            <ul>
              {filter.list.map((l) => (
                <li>{l}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
