import { useContext, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ConfirmationPopup from '../components/ConfirmationPopup';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { UserContext } from '../contexts/UserContext';
import styles from '../css/LoginRegister.module.css';

function LoginRegisterPage() {
  const history = useHistory();
  const { pathname } = history.location;
  const { isRegistered, setIsRegistered } = useContext(UserContext);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (isRegistered) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setIsRegistered(false);
      }, 3000);
    }
  }, [pathname]);

  return (
    <div className={styles.log_reg_container}>
      <div className={styles.log_reg_wrapper}>
        <div className={styles.log_reg_header}>
          {pathname === '/login' ? (
            <>
              <h1>Log in</h1>
              <p>
                <Link to='/register' replace>
                  Don't have an account? <br /> Register!
                </Link>
              </p>
            </>
          ) : (
            <>
              <h1>Register</h1>
              <p>
                <Link to='/login' replace>
                  Already have an Account? <br /> Log in!
                </Link>
              </p>
            </>
          )}
        </div>
        <div className={`${styles.log_reg_header} ${styles.header_lg}`}>
          <div
            className={`${styles.header_group} ${
              pathname === '/login' && styles.header_group_active
            }`}
          >
            <Link to='/login' replace>
              <h2>Log in</h2>
            </Link>
            {pathname !== '/login' && (
              <p>
                <Link to='/login' replace>
                  Already have an Account? <br /> Log in!
                </Link>
              </p>
            )}
          </div>
          <div
            className={`${styles.header_group} ${
              pathname === '/register' && styles.header_group_active
            }`}
          >
            <Link to='/register' replace>
              <h2>Register</h2>
            </Link>
            {pathname !== '/register' && (
              <p>
                <Link to='/register' replace>
                  Don't have an account? <br /> Register!
                </Link>
              </p>
            )}
          </div>
        </div>
        {showPopup && <ConfirmationPopup />}
        {pathname === '/login' && <LoginForm />}
        {pathname === '/register' && <RegisterForm />}
        <h3>A new Adventure Awaits!</h3>
      </div>
    </div>
  );
}

export default LoginRegisterPage;
