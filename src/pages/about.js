// testing about page
import "../css/About.module.css";
import aboutHero from '../../public/assets/background/allcars_about.jpg';


const about = () => {
    return ( 
        <div className = "about-container">
            <div className="about-hero-image">
                <h1 className="about-title">About AllCars</h1>
                <img src={aboutHero} alt="About Header" />
            </div>
            <div className="about-text">
            </div>
        </div>
     );
}
 
export default about;