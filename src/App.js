import { BrowserRouter as Router, Route } from 'react-router-dom';
import FooterNavbar from './components/FooterNavbar';
import Navbar from './components/Navbar';
import CarContextProvider from './contexts/CarContext';
import CartContextProvider from './contexts/CartContext';
import Home from './pages/Home';
// import Test from './components/test';
function App() {
  return (
    <div className='App'>
      <Router>
        <CarContextProvider>
          <CartContextProvider>
            <FooterNavbar />
            <Navbar />
            <Route exact path='/deals'></Route>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about'></Route>
            {/* <Test /> */}
          </CartContextProvider>
        </CarContextProvider>
      </Router>
    </div>
  );
}

export default App;
