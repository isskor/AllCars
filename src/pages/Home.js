import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import CarCard from '../components/CarCard';
import SearchForm from '../components/SearchForm';
import style from '../css/Home.module.css';

function Home() {

    const { cars } = useContext(CarContext);

    return (
        <div className={style.home}>
            <div className={style.hero}>
                <img className={style.heroImg} src="/assets/background/allcars_home.jpg" />
                <h1 className={style.heroText}>Quality never goes out of style</h1>
            </div>
            <div className={style.searchForm}>
                <SearchForm />
            </div>
            <div className={style.carList}>
                {cars.slice(0, 10).map((car, i) => (
                    <CarCard key={i} car={car} />
                ))}
            </div>
            <button className={style.loadMore}>Load more</button>
        </div>
    )
}

export default Home;