import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
// import { CartContext } from '../contexts/CartContext';
const Test = () => {
  const { dispatch, filteredCars, filters } = useContext(CarContext);
  //   const { addToCart, cart } = useContext(CartContext);

  const handleDispatch = (type, payload) => {
    dispatch({
      type: type,
      payload: payload,
    });
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* for testing, display cart length */}
      {/* <h2>cart items {cart.length}</h2> */}
      <div className='cars'>
        {filteredCars.map((car) => (
          <div key={car.vin}>
            {/* for testing, click on title to add to cart */}
            {/* <h1 onClick={() => addToCart(car)}>{car.make}</h1> */}
            <p onClick={() => handleDispatch('filterMake', car.make)}>
              {car.make}
            </p>
            <p>{car.model}</p>
            <p>{car.year}</p>
            <p>{`${car.discounted}`}</p>
          </div>
        ))}
      </div>
      <div className='filters'>
        {filters.map((filter) => (
          <p>{filter.type}</p>
        ))}
      </div>
    </div>
  );
};

export default Test;
