import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
const useForm = (callback, validate, state) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const { usersState } = useContext(UserContext);
  useEffect(() => {
    if (Object.keys(errors).length === 0 && Object.keys(values).length > 0) {
      callback();
      setValues({});
    }
  }, [errors]);

  console.log(usersState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values, state));
  };

  const handleChange = (e) => {
    e.persist();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
