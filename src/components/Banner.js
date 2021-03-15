import style from "../css/Banner.module.css";

const Banner = () => {
  return (
    <div className={style.header}>
      <img src="/assets/background/allcars_deals.jpg" alt=""/>
      <h1>Quality Deals</h1>
    </div>
  );
}
 
export default Banner;