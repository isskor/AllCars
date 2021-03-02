import { BrowserRouter as Router, Route } from "react-router-dom" ;
import FooterNavbar from "./components/FooterNavbar";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className='App'>
      <Router>
          
          <FooterNavbar />
          <Navbar />
          <Route exact path="/deals" ></Route>
          <Route exact path="/" ></Route>
          <Route exact path="/about" ></Route>
          
          
        
      </Router>
      
    </div>
  );
}

export default App;
