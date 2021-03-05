import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarContextProvider from './contexts/CarContext';
import CartContextProvider from './contexts/CartContext';
import Home from './pages/Home';
import Test from './components/test';
function App() {
  return (
    <div className='App'>
      <Router>
        <CarContextProvider>
          <CartContextProvider>
            <Navbar />
            <Route exact path='/' component={Home}></Route>
            <Route path='/deals' />
            <Route path='/about' />
            <Route exact path='/car/:id' />
            <Route exact path='/cart' />
            <Route path='/receipt' />
            <Test />
          </CartContextProvider>
        </CarContextProvider>
      </Router>
    </div>
  );
}

export default App;
