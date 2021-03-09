import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarContextProvider from './contexts/CarContext';
import CartContextProvider from './contexts/CartContext';
import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <div className='App'>
      <Router>
        <CarContextProvider>
          <CartContextProvider>
            <Navbar />

            <Switch>
                <Route path='/deals' />
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
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
