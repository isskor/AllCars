import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from '../css/LoginForm.module.css';
function LoginForm() {
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // do something
    history.goBack();
  };

  return (
    <div className={styles.loginForm}>
      <form>
        <div className={styles.form_group}>
          <label className={styles.login_label}>Username</label>
          <input
            type='text'
            name='login'
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
          <p className={styles.forgot_pw}>Forgot your password?</p>
        </div>
        <div className={styles.form_group}>
          <button type='submit' onClick={(e) => handleLogin(e)}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
