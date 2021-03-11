import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarContextProvider from './contexts/CarContext';
import CartContextProvider from './contexts/CartContext';
import Home from './pages/Home';
import About from './pages/About';
import Deals from './pages/deals';
import CartPage from './pages/CartPage';
import CarDetails from './pages/CarDetails';
import Receipt from './pages/Receipt';
function App() {
  return (
    <div className='App'>
      <Router>
        <CarContextProvider>
          <CartContextProvider>
            <Navbar />
            <Switch>
              <Route path='/deals' component={Deals} />
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route exact path='/car/:id' component={CarDetails} />
              <Route exact path='/cart' component={CartPage} />
              <Route exact path='/receipt' component={Receipt}></Route>
            </Switch>
          </CartContextProvider>
        </CarContextProvider>
      </Router>
    </div>
  );
}

export default App;
