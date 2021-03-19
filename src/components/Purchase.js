import style from '../css/Purchase.module.css';
import OrderCard from './OrderCard';

function Purchase() {

    return (
        <div className={style.purchaseContainer}>
            <h2 className={style.purchaseHeader}>My purchases</h2>
            <div className="orderCards">
                {/* map out OrderCards here */}
                <OrderCard />
            </div>
        </div>
    )

}

export default Purchase;