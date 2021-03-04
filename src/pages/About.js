import styles from "../css/About.module.css";
// import aboutHero from "/assets/background/allcars_about.jpg";
// import aboutTeam from "/assets/background/allcars-team.jpg";


const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutHeroContainer}>
                <h1 className={styles.aboutTitle}>About us</h1>
                <img className={styles.aboutHeroImage} src="/assets/background/allcars_about.jpg" alt="About Header" />
            </div>
            <div className={styles.aboutContentContainer}>
                <div className={styles.aboutText}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis cupiditate ipsa ducimus ex! Perspiciatis quisquam exercitationem debitis recusandae repellat magnam maxime sunt. Maxime consequuntur, at quidem eius rerum pariatur.</p>
                </div>
                <div className={styles.aboutImageStaff}>
                    <img className={styles.aboutTeam} src="/assets/background/allcars-team.jpg" alt="About the AllCars staff" />
                </div>
                <div className={styles.aboutContactInfo}>
                    Contact us!
                </div>
            </div>
        </div>
    );
}

export default About;