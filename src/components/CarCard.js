import style from '../css/CarCard.module.css';
import { useHistory } from 'react-router-dom';
import AddToCart from './AddToCart';

function CarCard(prop) {
  const history = useHistory();
  function goToCarDetails(e) {
    // console.log(e.target.tagName );
    if (e.target.tagName === 'BUTTON') return;
    history.push(`/car/${prop.car.vin}`);
  }

  return (
    <div className={style.carCard} onClick={(e) => goToCarDetails(e)}>
      <div className={style.imgContainer}>
        <img
          src={`/assets/car-pictures/${prop.car.make}-${prop.car.model}-${prop.car.year}.jpg`}
          alt='Car picture'
        />
        <p className={style.carPrice}>${prop.car.price}</p>
        <div className={style.imgTextWrapper}>
          <p className={style.wrapperText}>{prop.car.make}</p>
          <p className={style.wrapperText}>{prop.car.year}</p>
        </div>
      </div>
      <div className={style.statsContainer}>
        <div className='carModel'>
          <p className={style.model}>Model</p>
          <p className={style.modelName}>{prop.car.model}</p>
        </div>
        <div className={style.milesContainer}>
          <p className={style.miles}>Miles</p>
          <p className={style.milesNumber}>{prop.car.miles}</p>
        </div>
        <AddToCart car={prop.car} />
      </div>
    </div>
  );
}

export default CarCard;
