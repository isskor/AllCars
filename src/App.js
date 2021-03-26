import { Route, Switch } from 'react-router-dom';

// context
import CarContextProvider from './contexts/CarContext';
import UserContextProvider from './contexts/UserContext';
// components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Deals from './pages/deals';
import CartPage from './pages/CartPage';
import CarDetails from './pages/CarDetails';
import Receipt from './pages/Receipt';
import LoginRegister from './pages/LoginRegister';
import UserPage from './pages/UserPage';
// styles
import styles from './css/App.module.css';

function App() {
  return (
    <div className='App'>
      <CarContextProvider>
        <UserContextProvider>
          <Navbar />
          <div className={styles.page_container}>
            <Switch>
              <Route path='/deals' component={Deals} />
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/car/:id' component={CarDetails} />
              <Route path='/cart' component={CartPage} />
              <Route path='/receipt' component={Receipt} />
              <Route
                path={['/login', '/register']}
                component={LoginRegister}
              />
              <Route path='/user-page' component={UserPage} />
            </Switch>
          </div>
        </UserContextProvider>
      </CarContextProvider>
    </div>
  );
}

export default App;
