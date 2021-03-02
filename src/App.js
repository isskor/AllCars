import CarContextProvider from './contexts/CarContext';
import Test from './components/test';
import CartContextProvider from './contexts/CartContext';
function App() {
  return (
    <CarContextProvider>
      <CartContextProvider>
        <div className='App'>
          <h1>AllCars</h1>
        </div>
        <Test />
      </CartContextProvider>
    </CarContextProvider>
  );
}

export default App;
