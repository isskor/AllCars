import CarContextProvider from './contexts/CarContext';
import Test from './components/test';
function App() {
  return (
    <CarContextProvider>
      <div className='App'>
        <h1>AllCars</h1>
      </div>
      <Test />
    </CarContextProvider>
  );
}

export default App;
