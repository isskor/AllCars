import { useState, useContext, useEffect, useRef } from 'react';
import { CarContext } from '../contexts/CarContext';
import CarCard from '../components/CarCard';
import SearchForm from '../components/SearchForm';
import style from '../css/Home.module.css';
import Banner from '../components/Banner';

function Home() {
  const { filteredCars } = useContext(CarContext);
  //   set component state
  // cars to show
  const [showCars, setShowCars] = useState([]);
  //   number of cars to be shown initital 10
  const [showNumber, setShowNumber] = useState(10);
  // get a new list of cars to show everytime showNumber changes
  useEffect(() => {
    const showing = filteredCars.slice(0, showNumber);
    setShowCars(showing);
  }, [showNumber, filteredCars]);

  //   add 10 to current showNumber
  const handleShowNumber = () => {
    setShowNumber(showNumber + 10);
  };

  const resultRef = useRef();

  return (
    <div className={style.home}>
      <Banner
        imgSrc={'/assets/background/allcars_home.jpg'}
        altText={'Vintage car'}
      />
      <h1 className={style.heading}>Quality never goes out of style</h1>
      <div className={style.searchForm}>
        <SearchForm scrollToRef={resultRef} />
      </div>
      <div ref={resultRef} className={style.carList}>
        {showCars.length === 0 && (
          <div>
            <h1>no cars</h1>
          </div>
        )}
        {showCars.map((car) => (
          <CarCard key={car.vin} car={car} />
        ))}
        {showCars.length !== filteredCars.length && (
          <div className={style.btnContainer}>
            <button className={style.loadMore} onClick={handleShowNumber}>
              Load more
            </button>
          </div>
        )}
      </div>
      {/* <ScrollToTopBtn /> */}
    </div>
  );
}

export default Home;
