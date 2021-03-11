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
                <div className={styles.aboutText}>
                    <img className={styles.teamImgWrap} src="/assets/background/allcars-team.jpg" alt="About the AllCars staff" />
                    <h2 className={styles.paragraphHeading}>Company history</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Adipisci veritatis cupiditate ipsa ducimus ex! Perspiciatis quisquam exercitationem debitis recusandae repellat magnam maxime sunt. Maxime consequuntur, at quidem eius rerum pariatur.</p>
                    <p>Sed auctor tincidunt ante sit amet volutpat. Donec euismod nisl eu neque lacinia, at pellentesque turpis dictum. Proin a libero ultricies, faucibus dui at, consectetur enim. Nulla ullamcorper
                     non mi vitae ullamcorper. Aliquam at sem nec quam gravida commodo id ac metus. Vestibulum ultricies tortor ut eros aliquam vehicula. Maecenas sed diam scelerisque, convallis justo et, faucibus leo.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc ligula, tristique eget ligula luctus, commodo euismod enim. Pellentesque lacinia enim vel mi varius viverra. Sed vestibulum nulla non 
                    aliquam tempor. Nulla a eleifend enim, in sodales nisl. Vivamus vel sodales quam.</p>

                    <h2 className={styles.paragraphHeading}>Our philosophy</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc ligula, tristique eget ligula luctus, commodo euismod enim. Pellentesque lacinia enim vel mi varius viverra. Sed vestibulum nulla non aliquam tempor.
                     Nulla a eleifend enim, in sodales nisl. Vivamus vel sodales quam. Proin iaculis quam ipsum, eu ornare arcu viverra sed. Ut ut varius libero. Aenean sollicitudin ac metus id mollis. Fusce suscipit diam dolor, at
                      facilisis odio elementum a. Curabitur suscipit tempus vulputate. Nunc imperdiet gravida dolor, vel dapibus odio ornare non. Vivamus sed metus ut ligula facilisis dapibus. Pellentesque vulputate sollicitudin elit at eleifend.
                       Quisque maximus consectetur erat sit amet condimentum. Sed tincidunt felis quis felis auctor, at imperdiet lectus egestas. Fusce lacinia, metus id interdum hendrerit, ex enim tempor odio, eget imperdiet ante tellus a lacus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis cupiditate ipsa ducimus ex! Perspiciatis quisquam exercitationem debitis recusandae repellat magnam maxime sunt. Maxime consequuntur, at quidem eius rerum pariatur.</p>

                    <h2 className={styles.paragraphHeading}>The future</h2>
                    <p>Sed auctor tincidunt ante sit amet volutpat. Donec euismod nisl eu neque lacinia, at pellentesque turpis dictum. Proin a libero ultricies, faucibus dui at, consectetur enim. Nulla ullamcorper
                     non mi vitae ullamcorper. Aliquam at sem nec quam gravida commodo id ac metus. Vestibulum ultricies tortor ut eros aliquam vehicula. Maecenas sed diam scelerisque, convallis justo et, faucibus leo.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc ligula, tristique eget ligula luctus, commodo euismod enim. Pellentesque lacinia enim vel mi varius viverra. Sed vestibulum nulla non aliquam 
                    tempor. Nulla a eleifend enim, in sodales nisl. Vivamus vel sodales quam.</p>
                    
                </div>
                <img className={styles.teamImgBottom} src="/assets/background/allcars-team.jpg" alt="About the AllCars staff" />
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