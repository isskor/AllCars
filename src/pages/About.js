import styles from "../css/About.module.css";
import FooterNavBar from '../components/FooterNavbar';


const About = () => {
    return (
        <>
            <section className={styles.aboutContainer}>
                <div className={styles.aboutHeroContainer}>
                    <h1 className={styles.aboutTitle}>About us</h1>
                    <img className={styles.aboutHeroImage} src="/assets/background/allcars_about.jpg" alt="About Header" />
                </div>
                <div className={styles.aboutContentContainer}>
                    <section className={styles.aboutText}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis cupiditate ipsa ducimus ex!
                        Perspiciatis quisquam exercitationem debitis recusandae repellat magnam maxime sunt. Maxime consequuntur,
                        at quidem eius rerum pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis cupiditate ipsa ducimus ex!
                        Perspiciatis quisquam exercitationem debitis recusandae repellat magnam maxime sunt. Maxime consequuntur,
                        at quidem eius rerum pariatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis cupiditate ipsa ducimus ex!
                        Perspiciatis quisquam exercitationem debitis recusandae repellat magnam maxime sunt. Perspiciatis quisquam exercitationem
                     debitis recusandae repellat magnam maxime sunt.</p>
                    </section>
                    <section className={styles.aboutImageStaff}>
                        <img className={styles.aboutTeam} src="/assets/background/allcars-team.jpg" alt="About the AllCars staff" />
                    </section>
                    <section className={styles.aboutContactInfo}>
                        <div className={styles.contactForm}></div>
                        <div className={styles.contactInformation}>
                            <article className={styles.customerContact}>
                                <h2>Customer Service</h2>
                                <p className="customerTimings">08:00-1730 Monday to Friday</p>
                                <address className="customerEmail">
                                    <a href="mailto:info@allcars.com">info@allcars.com</a><br />
                                    <a href="tel: +12345678901">(234)567-8901</a>
                                </address>
                            </article>
                        </div>
                    </section>
                </div>
            </section>
            <div className={styles.footerNav}>
                <FooterNavBar />
            </div>
        </>
    );
}

export default About;