import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import CarCard from '../components/CarCard';

function Home() {

    const { cars } = useContext(CarContext);

    return (
        <div className="home">
            <div className="hero">
                <img src="/assets/background/allcars_home.jpg" />
                <h1>Quality never goes out of style</h1>
                <div className="carList">
                    {cars.map((car, i) => (
                        <CarCard key={i} car={car} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;