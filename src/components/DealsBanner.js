import style from "../css/dealsBanner.module.css";

const DealsBanner = () => {
  return (
    <div className={style.header}>
      <img src="/assets/background/allcars_deals.jpg" alt=""/>
      <h1>Quality Deals</h1>
    </div>
  );
}
 
export default DealsBanner;