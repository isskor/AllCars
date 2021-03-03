import style from '../css/CarCard.module.css';

function CarCard(prop) {

    return (
        <div className={style.carCard}>
            <div className={style.imgContainer}>
                <img src={`/assets/car-pictures/${prop.car.make}-${prop.car.model}-${prop.car.year}.jpg`} alt="Car picture" />
                <p className={style.carPrice}>${prop.car.price}</p>
                <div className={style.imgTextWrapper}>
                    <p className={style.wrapperText}>{prop.car.make}</p>
                    <p className={style.wrapperText}>{prop.car.year}</p>
                </div>
            </div>
            <div className="statsContainer">
                <div className="carModel">
                    <p>Model</p>
                    <p>{prop.car.model}</p>
                </div>
                <div className="carMiles">
                    <p>Miles</p>
                    <p>{prop.car.miles}</p>
                </div>
                <button>Add to cart</button>
            </div>
        </div>
    )
    
}

export default CarCard;