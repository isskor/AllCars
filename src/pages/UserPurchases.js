import style from '../css/UserPage.module.css';
import { OrderedListOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import Banner from '../components/Banner';
import OrderCard from '../components/OrderCard';
import UserPageInfo from '../components/UserpageInfo';
import { UserContext } from '../contexts/UserContext';
function UserPurchases() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <div>
      <Banner 
        header={"My page"}
        imgSrc={"/assets/background/allcars_mypage.jpg"}
        altText={"My page image"}
      />
      <div className={style.container}>
        <button onClick={() => setCurrentUser(null)}>logout</button>
        <UserPageInfo/>
        <div className="myPurchasesContainer">
          {/* map out all OrderCards connected to profile here. */}
          <OrderCard/>
          <OrderCard/>
          <OrderCard/>
        
        </div>
      </div>

    </div>
  );
}

export default UserPurchases;
