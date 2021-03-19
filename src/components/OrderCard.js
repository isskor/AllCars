import { StayCurrentLandscape } from '@material-ui/icons';
import style from '../css/OrderCard.module.css';
import OrderCardOrders from './OrderCardOrders';

const OrderCard = ({order}) => {
  return(
  <div className={style.orderCardContainer}>
    <h2>Order: #<span>{order.id}</span></h2>
    <div className={style.info}>
      <p>Total price: <span>{order.cars.reduce((acc, cur) => cur.price + acc, 0)}</span></p>
      <p>
        <span className="timestamp">{order.timestamp}</span>
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