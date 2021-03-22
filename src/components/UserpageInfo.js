import style from '../css/UserInfo.module.css';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

  const UserPageInfo = () => {

  const { currentUser } = useContext(UserContext);
  const user = currentUser;
  console.log(user);
  return (
    <div className={style.userInfo}>
        <p>Name: <span>{user.username}</span></p>
        <p>Email: <span>{user.email}</span></p>
        <p>Address: <span>{user.address}</span></p>
        <p>Phone: <span>{user.phone_number}</span></p>
        {/* Add all info connected to profile here */}
      </div>
  );
}
 
export default UserPageInfo;