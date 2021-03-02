import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
const CartIcon = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  const totalCost = cart.reduce((acc, cur) => acc + cur.price, 0);
  console.log(totalCost);
  //   console.log(cart[0].price);
  return (
    <div>
      <span className='cost'>${totalCost}</span>
      <ShoppingCartOutlinedIcon
        className='cart'
        style={{
          fontSize: 40,
          color: 'var(--primary-color)',
          position: 'relative',
        }}
      ></ShoppingCartOutlinedIcon>
      <span className='quantity'>{cart.length}</span>
    </div>
  );
};

export default CartIcon;
