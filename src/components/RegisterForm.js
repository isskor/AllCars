import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/LoginForm.module.css';
function RegisterForm() {
  const form = [
    { name: 'Email', type: 'email', placeholder: 'Please enter your email' },
    {
      name: 'Password',
      type: 'password',
      placeholder: 'Please enter your password',
    },
    {
      name: 'Confirm Password',
      type: 'password',
      placeholder: 'Please confirm your password',
    },
    {
      name: 'Full name',
      type: 'text',
      placeholder: 'Enter your full name',
    },
    {
      name: 'Address',
      type: 'text',
      placeholder: 'Enter your address',
    },
    {
      name: 'Phone Number',
      type: 'text',
      placeholder: 'Please enter your phone number',
    },
  ];

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.loginForm}>
      <form>
        <h1>Register</h1>
        <p>
          <Link to='/login'>Already have an Account? Login!</Link>
        </p>
        {form?.map((item) => (
          <div className={styles.form_group} key={item.name}>
            <label className={styles.login_label}>{item.name}</label>
            <input
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
            />
          </div>
        ))}

        <div className={styles.form_group}>
          <button type='submit' onClick={(e) => handleRegister(e)}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
