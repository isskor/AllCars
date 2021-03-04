import style from '../css/CarCard.module.css';

function CarCard({car}) {
    console.log(car);
    /* Some how this runs more than the length of discountCars... */
    return (
        <div className={style.carCard}>
            <div className={style.imgContainer}>
                <img src={`/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`} alt="Car picture" />
                <p className={style.carPrice}>${car.price}</p>
                <div className={style.imgTextWrapper}>
                    <p className={style.wrapperText}>{car.make}</p>
                    <p className={style.wrapperText}>{car.year}</p>
                </div>
            </div>
            <div className={style.statsContainer}>
                <div className="carModel">
                    <p className={style.model}>Model</p>
                    <p>{car.model}</p>
                </div>
                <div className={style.milesContainer}>
                    <p className={style.miles}>Miles</p>
                    <p>{car.miles}</p>
                </div>
                <button className={style.addBtn}>Add to cart</button>
            </div>
        </div>
    )
    
}

export default CarCard;