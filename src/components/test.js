import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
const Test = () => {
  const { cars } = useContext(CarContext);
  console.log(cars);
  return (
    <div>
      <h1>hello</h1>
      {cars.map((car) => (
        <h1>{car.make}</h1>
      ))}
    </div>
  );
};

export default Test;
