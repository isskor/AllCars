import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarContextProvider from './contexts/CarContext';
import CartContextProvider from './contexts/CartContext';
import Test from './components/test';

function App() {
  return (
    <div className='App'>
      <Router>
        <CarContextProvider>
          <CartContextProvider>
            <Navbar />

            <Switch>
                <Route path='/deals' />
                <Route exact path='/' component={Test}/>
                <Route path='/about' />
                <Route exact path='/car/:id' />
                <Route exact path='/cart' />
                <Route path='/receipt' />
            </Switch>
            
            
            

          </CartContextProvider>
        </CarContextProvider>
      </Router>
    </div>
  );
}

export default App;
