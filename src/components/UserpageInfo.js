import style from '../css/UserInfo.module.css';

const UserPageInfo = () => {
  return (
    <div className={style.userInfo}>
        <p>Name: <span>Bob Bobbsen</span></p>
        <p>Adress: <span>Bobstreet 808, 8080 Bobland </span></p>
        <p>Email: <span>Bob@bob.se</span></p>
        {/* Add all info connected to profile here */}
      </div>
  );
}
 
export default UserPageInfo;