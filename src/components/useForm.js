import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    e?.preventDefault();
    callback();
  };

  const handleChange = (e) => {
    e.persist();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
