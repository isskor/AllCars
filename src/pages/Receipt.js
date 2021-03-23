import { useContext, useEffect } from 'react';
import { CarContext } from '../contexts/CarContext';
import { UserContext } from '../contexts/UserContext';
import ReceiptCar from '../components/ReceiptCar';
import styles from '../css/Receipt.module.css';
import { useHistory } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Receipt = () => {
  const { checkoutState, setCart } = useContext(UserContext);
  const { dispatch } = useContext(CarContext);
  const history = useHistory();
  const totalCost = checkoutState.cars
    ? checkoutState.cars.reduce((acc, cur) => acc + cur.price, 0)
    : '';

  useEffect(() => {
    setCart([]);
    return () => dispatch({ type: 'FILTER_RESET_ACTION' });
  }, []);

  const goToHome = () => {
    history.push('/');
  };
  return (
    <>
      {checkoutState.cars && (
        <div className={styles.receipt}>
          <h2>Receipt</h2>
          <h3>Thank you for your purchase ! </h3>
          <br />
          <p>Your Order(s) :</p>

          <div className={styles.receipt_content}>
            {/* <div className={styles.receipt_items}> */}
            {checkoutState.cars.map((car) => (
              <CartItem key={car.vin} cartItem={car} />
            ))}
            {/* </div> */}

            <div className={styles.receiptNote}>
              <h4>orderID {checkoutState.id}</h4>
              <p>
                Hello <b>{checkoutState.form.name}</b>. We have received your
                order and sent you a confirmation to your e-mail{' '}
                <b>{checkoutState.form.email}</b>.
              </p>
              <br />
              <p>
                Address: <b>{checkoutState.form.address}</b>
                <br />
                Phone number: <b>{checkoutState.form.phone}</b>
              </p>
              <br />
              <p>
                Delivery method: <b>{checkoutState.form.method}</b>
              </p>
              <br />
              <p>
                Total cost: <b>$ {totalCost.toLocaleString()}</b>
              </p>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <button onClick={() => window.print()}>Print</button>
            <button onClick={goToHome}>Back to Home</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Receipt;

// this is the form
// form.name
// name: '',
// email: '',
// phone: '',
// address: '',
// method: '',
