import style from '../css/UserPage.module.css';
import { OrderedListOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import Banner from '../components/Banner';
import Purchase from '../components/Purchase';
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
      <button onClick={() => setCurrentUser(null)}>logout</button>

      <Purchase />

        <UserPageInfo/>
    </div>
  );
}

export default UserPurchases;
