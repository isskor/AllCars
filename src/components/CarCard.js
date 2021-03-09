import style from '../css/CarCard.module.css';
import {useHistory} from 'react-router-dom' ;


function CarCard(prop) {

    const history = useHistory() ;
    function goToCarDetails() {
       history.push(`/car/${prop.car.vin}`)
    }

    return (
        <div className={style.carCard}>
            <div className={style.imgContainer} onClick={goToCarDetails}>
                <img src={`/assets/car-pictures/${prop.car.make}-${prop.car.model}-${prop.car.year}.jpg`} alt="Car picture" />
                <p className={style.carPrice}>${prop.car.price}</p>
                <div className={style.imgTextWrapper}>
                    <p className={style.wrapperText}>{prop.car.make}</p>
                    <p className={style.wrapperText}>{prop.car.year}</p>
                </div>
            </div>
            <div className={style.statsContainer}>
                <div className="carModel">
                    <p className={style.model}>Model</p>
                    <p>{prop.car.model}</p>
                </div>
                <div className={style.milesContainer}>
                    <p className={style.miles}>Miles</p>
                    <p>{prop.car.miles}</p>
                </div>
                <button className={style.addBtn}>Add to cart</button>
            </div>
        </div>
    )
    
}

export default CarCard;