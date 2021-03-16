import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import styles from '../css/LoginRegister.module.css';

function LoginRegisterPage() {
  const history = useHistory();

  return (
    <div className={styles.log_reg_container}>
      <LoginForm />
    </div>
  );
}

export default LoginRegisterPage;
