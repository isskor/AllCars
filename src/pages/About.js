import styles from "../css/About.module.css";
// import aboutHero from "/assets/background/allcars_about.jpg";
// import aboutTeam from "/assets/background/allcars-team.jpg";


const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutHeroContainer}>
                <img className={styles.aboutHeroImage} src="/assets/background/allcars_about.jpg" alt="About Header" />
                <h1 className={styles.aboutTitle}>About us</h1>
            </div>
            <div className={styles.aboutContentContainer}>
                <div className={styles.textAndImg}>
                    <div className={styles.aboutText}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis cupiditate ipsa ducimus ex! Perspiciatis quisquam exercitationem debitis recusandae repellat magnam maxime sunt. Maxime consequuntur, at quidem eius rerum pariatur.</p>
                    </div>
                    <img className={styles.aboutTeam} src="/assets/background/allcars-team.jpg" alt="About the AllCars staff" />
                </div>
                <div className={styles.aboutContactInfo}>
                    <div className={styles.contactWrapper}>
                        <p className={styles.allCarsCopyright}>AllCars &copy;</p>
                        <a className={styles.email} href="mailto: info@allcars.com">info@allcars.com</a>
                    </div>
                    <div className={styles.addressAndPhonenumber}>
                        <div className={styles.contactAddress}>
                            <p className={styles.contactUs}>Visit us at</p>
                            <p className={styles.contactText}>78 Shire Oak Road, Willerby</p>
                        </div>
                        <div className={styles.contactPhonenumber}>
                            <p className={styles.contactUs}>Or call us on</p>
                            <p className={styles.contactText}>078 2006 6076</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;