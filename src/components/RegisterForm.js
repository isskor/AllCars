import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import styles from '../css/LoginForm.module.css';
function RegisterForm() {
  const { registerUser } = useContext(UserContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    Password: '',
    'Confirm Password': '',
    phone: '',
    address: '',
    method: '',
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formValues = [
    {
      name: 'Full name',
      type: 'text',
      placeholder: 'Enter your full name',
    },
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
      error:
        form?.Password.toString() != form['Confirm Password'].toString()
          ? 'Password does not match'
          : '',
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
    const errors = formValues.filter((a) => a.error);
    // if there are errors, return without doing anything
    if (errors.length > 0) return;
    registerUser(form);

    //    do something
  };
  useEffect(() => {}, [form]);
  return (
    <div className={styles.loginForm}>
      <form onChange={handleChange}>
        {formValues?.map((item) => (
          <div className={styles.form_group} key={item.name}>
            <label className={styles.login_label}>{item.name}</label>
            <input
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
            />
            {item.error && (
              <span className={styles.form_error}>{item.error}</span>
            )}
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
