import style from '../css/OrderCard.module.css';
import CartItem from './CartItem';
import OrderCartItem from './OrderCarItem';

const OrderCard = ({ order }) => {
  return (
    <div className={style.orderCardContainer}>
      <h3 className={style.orderID}>
        Order: #<span>{order.id}</span>
      </h3>
      <div className={style.info}>
        <p className={style.orderInfo}>
          Total price:
          <span>
            {' '}
            ${' '}
            {order.cars
              .reduce((acc, cur) => cur.price + acc, 0)
              .toLocaleString()}
          </span>
        </p>
        <p className={style.orderInfo}>
          <span className='timestamp'>{order.timestamp}</span>
        </p>
      </div>
      <div className={style.orders}>
        {order.cars.map((car) => (
          // <OrderCartItem car={car} key={car.vin} />
          <CartItem cartItem={car} key={car.vin} />
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
