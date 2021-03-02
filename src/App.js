import { BrowserRouter as Router, Route } from "react-router-dom" ;
import FooterNavbar from "./components/FooterNavbar";
import Navbar from "./components/Navbar"
import CarContextProvider from './contexts/CarContext';
import Test from './components/test';
function App() {
  return (
    <div className='App'>
      <Router>
    <CarContextProvider>
      {/* <CartContextProvider> */}
      <div className='App'>
      </div>
          <FooterNavbar />
          <Navbar />
          <Route exact path="/deals" ></Route>
          <Route exact path="/" ></Route>
          <Route exact path="/about" ></Route>
    </CarContextProvider>
      {/* </CartContextProvider> */}
      </Router>
      <Test />
  );
}

export default App;
