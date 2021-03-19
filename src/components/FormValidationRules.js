const textError = 'Cannot be empty';
const emailError = 'Email address is invalid';
const passwordError = 'Password too short';
const shippingError = 'Please choose a shipping method';

function checkEmail(errors, email) {
  if (!email) return (errors.email = textError);
  if (!/\S+@\S+\.\S+/.test(email)) {
    return (errors.email = emailError);
  }
  return;
}

function checkPassword(errors, password1, password2) {
  if (!password1) return (errors.password = textError);
  if (password1.length < 6) return (errors.password = passwordError);
  if (password1 !== password2)
    return (errors.confirm_password = 'Passwords does not match');
}

export const validateRegister = (values) => {
  let errors = {};
  if (!values.username) errors.username = textError;
  checkEmail(errors, values.email);

  checkPassword(errors, values.password, values.confirm_password);
  if (!values.address) errors.address = textError;
  if (!values.phone_number) errors.phone_number = textError;
  console.log(errors);
  return errors;
};

export const validateCheckout = (values) => {
  let errors = {};
  if (!values.name) errors.name = textError;
  if (!values.address) errors.address = textError;
  checkEmail(errors, values.email);
  if (!values.phone) errors.phone = textError;
  if (!values.method) errors.method = shippingError;
  if (!values.cardNumber) errors.cardNumber = textError;
  if (!values.nameOnCard) errors.nameOnCard = textError;
  if (!values.dateOnCard) errors.dateOnCard = textError;
  if (!values.cvc) errors.cvc = textError;
  return errors;
};
