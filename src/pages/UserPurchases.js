import { useContext } from 'react';
import Banner from '../components/Banner';
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



    </div>
  );
}

export default UserPurchases;