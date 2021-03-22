import { useEffect, useState } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length === 0 && Object.keys(values).length > 0) {
      callback();
      setValues({});
    }
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  const handleChange = (e) => {
    // e.persist();
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
