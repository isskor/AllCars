import { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

// context
import CarContextProvider from './contexts/CarContext';
import CartContextProvider from './contexts/CartContext';
// components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Deals from './pages/deals';
import CartPage from './pages/CartPage';
import CarDetails from './pages/CarDetails';
import Receipt from './pages/Receipt';
// styles
import styles from './css/App.module.css';

function App() {
  return (
    <div className='App'>
      <CarContextProvider>
        <CartContextProvider>
          <Navbar />
          <div className={styles.page_container}>
            <Switch>
              <Route path='/deals' component={Deals} />
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route exact path='/car/:id' component={CarDetails} />
              <Route exact path='/cart' component={CartPage} />
              <Route exact path='/receipt' component={Receipt}></Route>
            </Switch>
          </div>
        </CartContextProvider>
      </CarContextProvider>
    </div>
  );
}

export default App;
