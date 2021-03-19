import style from '../css/OrderCard.module.css';
import OrderCardOrders from './OrderCardOrders';

const OrderCard = () => {
  return(
  <div className={style.orderCardContainer}>
    <div className={style.info}>
      <p>Name: <span>Troll Face</span></p>
      <p>Address: <span>Lolstreet 420</span></p>
    </div>
    <div className={style.orders}>
      <OrderCardOrders/>
    </div>
  </div>
  )

}
 
export default OrderCard;