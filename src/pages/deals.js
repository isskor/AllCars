import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';

import DealsBanner from '../components/DealsBanner';
import TempCard from '../components/tempCard';
import style from "../css/deals.module.css";

const Deals = () => {
  const { cars } = useContext(CarContext);

  return (
    <div className={style.dealsContainer}>
      {/* ADD HEADER  COMP HERE */}
      <DealsBanner className={style.header}/>
      {/* -------------------- */}

      <div className={style.grid}>
        {/* ADD CARD COMPONENT HERE + IMPORT STYLES FOR CARD. FILTER OUT COMPONENTS THAT HAS DISCOUNTED = TRUE */}
        {cars.map((car, i) => (
           <TempCard car={car} key={i}/>
          ))}
      </div>
    </div>
  );
}
 
export default Deals;