import style from '../css/UserPage.module.css';
import { useContext } from 'react';
import Banner from '../components/Banner';
import UserPageInfo from '../components/UserpageInfo';
import { UserContext } from '../contexts/UserContext';
import OrderCard from '../components/OrderCard';
function UserPage() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <div>
      <Banner
        header={'My page'}
        imgSrc={'/assets/background/allcars_mypage.jpg'}
        altText={'My page image'}
      />
      <button onClick={() => setCurrentUser(null)}>logout</button>

      <UserPageInfo />

      <ul>
        {currentUser.purchaseHistory.map((order) => (
          <OrderCard order={order} key={order.id} />
        ))}
      </ul>
    </div>
  );
}

export default UserPage;
