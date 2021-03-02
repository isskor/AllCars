import { BrowserRouter as Router, Route } from "react-router-dom" ;
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className='App'>
      <Router>
          <h1>AllCars</h1>
          <Navbar />
          <Route exact path="/deals" ></Route>
          <Route exact path="/" ></Route>
          <Route exact path="/about" ></Route>
          
        
      </Router>
      
    </div>
  );
}

export default App;
