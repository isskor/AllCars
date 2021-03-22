import styles from '../css/UserPage.module.css';
import { useContext } from 'react';
import Banner from '../components/Banner';
import UserPageInfo from '../components/UserpageInfo';
import { UserContext } from '../contexts/UserContext';
import OrderCard from '../components/OrderCard';
function UserPage() {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <div>
      <Banner
        header={'My page'}
        imgSrc={'/assets/background/allcars_mypage.jpg'}
        altText={'My page image'}
      />
      <div className={styles.container}>
        <div className={styles.UserPage_info}>
          <h2>My Info</h2>
          <UserPageInfo />
        </div>
        <div className={styles.purchases}>
          <h2 className={styles.purchasesHeading}>My Purchases</h2>
          <ul>
            {currentUser?.purchaseHistory.map((order) => (
              <OrderCard order={order} key={order.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
