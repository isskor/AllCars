import style from '../css/OrderCard.module.css';
import OrderCardOrders from './OrderCardOrders';

const OrderCard = () => {
  return(
  <div className={style.orderCardContainer}>
    <div className={style.info}>
      <h2>Order: <span>#420</span></h2>
      <p>Total price: <span>40000</span></p>
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