/* IMPORT carCards styling here */

function CarCard() {

    return (
        <div className="carCard">
            <div className="imgContainer">
                <img src="/assets/car-pictures/Acura-NSX-2000.jpg" alt="Car picture" />
                <p>Car price</p>
                <div className="imgTextWrapper">
                    <p>Car make</p>
                    <p>Car year</p>
                </div>
            </div>
            <div className="statsContainer">
                <p>model</p>
                <p>miles</p>
                <button>Add to cart</button>
            </div>
        </div>
    )
    
}

export default CarCard;