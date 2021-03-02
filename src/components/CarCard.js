function CarCard(prop) {

    return (
        <div className="carCard">
            <div className="imgContainer">
                <img src={`/assets/car-pictures/${prop.car.make}-${prop.car.model}-${prop.car.year}.jpg`} alt="Car picture" />
                <p>{prop.car.price}</p>
                <div className="imgTextWrapper">
                    <p>{prop.car.make}</p>
                    <p>{prop.car.year}</p>
                </div>
            </div>
            <div className="statsContainer">
                <p>{prop.car.model}</p>
                <p>{prop.car.miles}</p>
                <button>Add to cart</button>
            </div>
        </div>
    )
    
}

export default CarCard;