import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import styles from '../css/LoginRegister.module.css';

function LoginRegisterPage() {
  const history = useHistory();
  const { pathname } = history.location;
  return (
    <div className={styles.log_reg_container}>
      <div className={styles.log_reg_wrapper}>
        <div className={styles.log_reg_header}>
          {pathname === '/login' ? (
            <>
              <h1>Login</h1>
              <p>
                <Link to='/register'>Don't have an account? Register!</Link>
              </p>
            </>
          ) : (
            <>
              <h1>Register</h1>
              <p>
                <Link to='/login'>Already have an Account? Login!</Link>
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
            <h2>Login</h2>
            {pathname !== '/login' && (
              <p>
                <Link to='/login'>Already have an Account? Login!</Link>
              </p>
            )}
          </div>
          <div
            className={`${styles.header_group} ${
              pathname === '/register' && styles.header_group_active
            }`}
          >
            <h2>Register</h2>
            {pathname !== '/register' && (
              <p>
                <Link to='/register'>Don't have an account? Register!</Link>
              </p>
            )}
          </div>
        </div>
        {pathname === '/login' && <LoginForm />}
        {pathname === '/register' && <RegisterForm />}
        <h3>A new Adventure Awaits!</h3>
      </div>
    </div>
  );
}

export default LoginRegisterPage;
