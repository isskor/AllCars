import style from "../css/Banner.module.css";

const Banner = (prop) => {
  return (
    <div className={style.header}>
      <img src={prop.imgSrc} alt={prop.altText} />
      <h1>{prop.header}</h1>
    </div>
  );
}
 
export default Banner;