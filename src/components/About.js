import styles from "./styles/About.module.css";
import Image from "next/image";

export default function About(props) {

    return (<>
        <div id="about" className={styles.container}>
            <div className={styles.gradient}/>
                <div className={styles.about_section} id="about-me-section">
                    <h1 id="scroll-to-about" className={styles.textTitle}>About Me</h1>
                    <div className={styles.description}>
                        <span className={styles.descriptionText}>Hello! I'm a computer engineering student at the University of Texas at Dallas, with a particular focus on back-end development and embedded systems. While my background lies more on the hardware side, I have been recently exploring the world of web technologies and front-end development.</span>
                        <span className={styles.descriptionText}>With extensive experience in programming languages such as Java, C++, and JavaScript, I'm well-versed in software development. Additionally, I have a solid understanding of microcontrollers, sensors, circuits, and other components necessary for embedded systems. This allows me to work seamlessly between software and hardware, making me a versatile engineer who can handle complex projects.</span>
                        <span className={styles.descriptionText}>Thank you for visiting my portfolio page. Please take a look at my projects, and feel free to contact me if you have any questions or opportunities you'd like to discuss.</span>
                    </div>
                </div>
            <div className={styles.education_section}>
                <h1 style={{paddingTop: '5rem'}} className={styles.textTitle}>Education</h1>
                <div className={styles["utdicon-wrapper"]}>
                    <Image width={40} height={40} quality={100} src="/utdicon.png"/>
                </div>
                <h3 className={styles.subTitle}>The University of Texas at Dallas</h3>
                <h6 className={styles.gpa}>GPA: 3.69</h6>
                <h6 style={{fontSize: '1rem', paddingTop: '.5rem', fontWeight: '400'}} className={styles.subTitle}>Bachelor's of Science - Computer Engineering</h6>
                <h6 style={{fontSize: '1rem', fontWeight: '400'}} className={styles.subTitle}>August 2021 - May 2025</h6>
            </div>
            <div style={{paddingLeft: '10rem', paddingTop: '5rem'}} className={styles.experience_section}>
                <h1 className={styles.textTitle}>Experience</h1>
            </div>
        </div>
    </>);
}