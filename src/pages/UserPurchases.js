import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
function UserPurchases() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <div>
      <button onClick={() => setCurrentUser(null)}>logout</button>
    </div>
  );
}

export default UserPurchases;
