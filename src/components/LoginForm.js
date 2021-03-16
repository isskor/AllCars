import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/LoginForm.module.css';
function LoginForm() {
  return (
    <div className={styles.loginForm}>
      <form>
        <h1>Login</h1>
        <p>
          <Link to='/register'>Don't have an account? Register!</Link>
        </p>
        <div className={styles.form_group}>
          <label className={styles.login_label}>Username</label>
          <input
            type='text'
            name='login'
            placeholder='Enter your username or emailx'
          />
        </div>
        <div className={styles.form_group}>
          <label className={styles.login_label}>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Enter your password'
          />
          <span>Forgot your password?</span>
        </div>
        <div className={styles.form_group}>
          <button type='button'>Log in</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
