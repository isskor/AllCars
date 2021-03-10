import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarContextProvider from './contexts/CarContext';
import CartContextProvider from './contexts/CartContext';
import Receipt from './pages/Receipt';

function App() {
  return (
    <div className='App'>
      <Router>
        <CarContextProvider>
          <CartContextProvider>
            <Navbar />
            
            <Route exact path='/deals'></Route>
            <Route exact path='/'></Route>
            <Route exact path='/about'></Route>
            
            <Receipt />
          </CartContextProvider>
        </CarContextProvider>
      </Router>
    </div>
  );
}

export default App;
