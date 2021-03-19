import style from '../css/OrderCard.module.css';
import OrderCardOrders from './OrderCardOrders';

const OrderCard = () => {
  return(
  <div className={style.orderCardContainer}>
    <h2>Order: <span>#123</span></h2>
    <div className={style.info}>
      <p>Total price: <span>40000</span></p>
      <p>ID: <span>1236 231 SD58 </span></p>
      <p>
        <span className="date">10.10.2010</span> - <span className="time">10:00</span>
      </p>
    </div>
    <div className={style.orders}>
      {/* Loop over all orders here */}
      <OrderCardOrders/>
    </div>
  </div>
  )

}
 
export default OrderCard;