import "../css/About.module.css";
import aboutHero from '../../public/assets/background/allcars_about.jpg';


const About = () => {
    return ( 
        <div className = "about-container">
            <div className="about-hero-image">
                <h1 className="about-title">About AllCars</h1>
                <img src={aboutHero} alt="About Header" />
            </div>
            <div className="about-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis cupiditate ipsa ducimus ex! Perspiciatis quisquam exercitationem debitis recusandae repellat magnam maxime sunt. Maxime consequuntur, at quidem eius rerum pariatur.</p>
            </div>
            <div className="about-image-staff">
                {/* <img src={aboutStaff} alt="About Staff" /> */}
            </div>
        </div>
     );
}
 
export default About;