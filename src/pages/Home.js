import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import CarCard from '../components/CarCard';
import style from '../css/Home.module.css';

function Home() {

    const { cars } = useContext(CarContext);

    return (
        <div className="home">
            <div className={style.hero}>
                <img className={style.heroImg} src="/assets/background/allcars_home.jpg" />
                <h1 className={style.heroText}>Quality never goes out of style</h1>
            </div>
            <div className={style.carList}>
                {cars.map((car, i) => (
                    <CarCard key={i} car={car} />
                ))}
            </div>
        </div>
    )
}

export default Home;