import { BrowserRouter as Router, Route } from "react-router-dom" ;
import FooterNavbar from "./components/FooterNavbar";

function App() {
  return (
    <div className='App'>
      <Router>
          <h1>AllCars</h1>
          <FooterNavbar />
          
          <Route exact path="/deals" ></Route>
          <Route exact path="/" ></Route>
          <Route exact path="/about" ></Route>
          
          
        
      </Router>
      
    </div>
  );
}

export default App;
