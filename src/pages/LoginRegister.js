import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import styles from '../css/LoginRegister.module.css';

function LoginRegisterPage() {
  const history = useHistory();
  const { pathname } = history.location;
  return (
    <div className={styles.log_reg_container}>
      <div className={styles.log_reg_wrapper}>
        {pathname === '/login' && <LoginForm />}
        {pathname === '/register' && <RegisterForm />}
        <h3>A new Adventure Awaits!</h3>
      </div>
    </div>
  );
}

export default LoginRegisterPage;
