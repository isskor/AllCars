import style from '../css/OrderCard.module.css';
import OrderCartItem from './OrderCarItem';

const OrderCard = ({ order }) => {
  return (
    <div className={style.orderCardContainer}>
      <h2 className={style.orderID}>
        Order: #<span>{order.id}</span>
      </h2>
      <div className={style.info}>
        <p className={style.orderInfo}>
          Total price:
          <span>{order.cars.reduce((acc, cur) => cur.price + acc, 0)}</span>
        </p>
        <p className={style.orderInfo}>
          <span className='timestamp'>{order.timestamp}</span>
        </p>
      </div>
      <div className={style.orders}>
        {order.cars.map((car) => (
          <OrderCartItem car={car} />
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
