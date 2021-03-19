import { OrderedListOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import Banner from '../components/Banner';
import OrderCard from '../components/OrderCard';
import { UserContext } from '../contexts/UserContext';
function UserPurchases() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <div>
      <Banner 
        header={"My page"}
        imgSrc={"/assets/background/allcars_about.jpg"}
        altText={"My page image"}
      />
      <button onClick={() => setCurrentUser(null)}>logout</button>

      <div className="myPurchasesContainer">
        {/* map out all OrderCards connected to profile here. */}
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        

      </div>

    </div>
  );
}

export default UserPurchases;
