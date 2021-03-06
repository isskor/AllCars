import { useHistory } from 'react-router-dom';
import styles from '../css/LoginForm.module.css';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

function LoginForm({ onCartPage }) {
  const history = useHistory();
  const { setCurrentUser, usersState } = useContext(UserContext);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const [errors, setError] = useState('');

  const loginUser = (user) => {
    const a = usersState.filter((object) => {
      if (object.email === user.email && object.password === user.password) {
        setCurrentUser(object);
        if (!onCartPage) {
          history.goBack();
          return object;
        }
        return object;
      }
    });
    if (a.length > 0) return;
    setError('Wrong email or password...');
  };

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    setError('');
  };

  const handleClick = (e) => {
    e.preventDefault();
    loginUser(loginInfo);
  };

  return (
    <div className={styles.login_form}>
      <form onChange={handleChange}>
        <div className={styles.form_group}>
          <label className={styles.login_label}>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Enter your username or email'
          />
        </div>
        <div className={styles.form_group}>
          <label className={styles.login_label}>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Enter your password'
          />
        </div>
        <div className={styles.form_group_btn}>
          <button type='submit' onClick={(e) => handleClick(e)}>
            Log in
          </button>
          <p className={styles.form_error}>{errors}</p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
