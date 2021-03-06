import { useContext } from 'react';
import styles from '../css/LoginForm.module.css';
import useForm from '../components/useForm';
import { validateRegister } from './FormValidationRules';
import { UserContext } from '../contexts/UserContext';

function RegisterForm() {
  const { registerUser, usersState } = useContext(UserContext);
  const { handleChange, handleSubmit, values, errors } = useForm(
    handleRegister,
    validateRegister,
    usersState
  );

  const formValues = [
    {
      display: 'Full name',
      name: 'username',
      type: 'text',
      placeholder: 'Enter your full name',
    },
    {
      display: 'Email',
      name: 'email',
      type: 'text',
      placeholder: 'Please enter your email',
    },
    {
      display: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Please enter your password',
    },
    {
      display: 'Confirm Password',
      name: 'confirm_password',
      type: 'password',
      placeholder: 'Please confirm your password',
    },
    {
      display: 'Address',
      name: 'address',
      type: 'text',
      placeholder: 'Enter your address',
    },
    {
      display: 'Phone Number',
      name: 'phone_number',
      type: 'text',
      placeholder: 'Please enter your phone number',
    },
  ];

  function handleRegister() {
    registerUser(values);
  }

  return (
    <div className={styles.login_form}>
      <form onSubmit={handleSubmit}>
        {formValues?.map((item) => (
          <div className={styles.form_group} key={item.name}>
            <label className={styles.login_label}>{item.display}</label>
            <input
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              value={values[item.name] || ''}
              onChange={handleChange}
            />

            <span className={styles.form_error}>{errors[item.name]}</span>
          </div>
        ))}

        <div className={styles.form_group_btn}>
          <button type='submit'>Register</button>
          <p
            className={styles.form_error}
            style={{ fontSize: '1rem', textAlign: 'center' }}
          >
            {errors.exists}
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
