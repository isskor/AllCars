import styles from '../css/CartItem.module.css'

const ReceiptCar = ({car}) => {
    return ( 
        <div className={styles.carCard}>
            <div className={styles.img_container}>
                <img
                    src={`/assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
                    alt={`${car.make}-${car.model}`}
                />
            </div>
            <div className={styles.car_info_container}>
                <div className='car_info'>         
                    <p> Model: {car.make} {car.model} </p>
                    <p> Year: {car.year}</p>
                </div>
                <div className='car_miles_ctn'>
                    
                    <p className='car_miles'> Miles: {car.miles}</p>
                </div>
                <div className='car_price_ctn'>
                     <p className={styles.car_price}> Price : $ {car.price.toLocaleString()} </p>
                </div>
            </div>
        </div>
    );
}
 
export default ReceiptCar;