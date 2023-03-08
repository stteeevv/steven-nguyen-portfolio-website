import styles from "./styles/About.module.css";
import Image from "next/image";
import { Card, Grid, Text, Link } from "@nextui-org/react";
import Experience from "@/components/Experience.js"

export default function About(props) {

    return (<>
        <div id="about" className={styles.container}>
            <div className={styles.gradient} style={{backgroundImage: props.isDarkMode ? "linear-gradient(black, #07090f)" : "linear-gradient(#e0e0e0, #c2c2c2)"}}/>
                <div className={styles.about_section} id="about-me-section">
                    <h1 id="scroll-to-about" className={styles.textTitle}>About Me</h1>
                    <div className={styles.description}>
                        <span className={styles.descriptionText}>Hello! I&apos;m a computer engineering student at the University of Texas at Dallas, with a particular focus on back-end development and embedded systems. While my background lies more on the hardware side, I have been recently exploring the world of web technologies and front-end development.</span>
                        <span className={styles.descriptionText}>With extensive experience in programming languages such as Java, C++, and JavaScript, I&apos;m well-versed in software development. Additionally, I have a solid understanding of microcontrollers, sensors, circuits, and other components necessary for embedded systems. This allows me to work seamlessly between software and hardware, making me a versatile engineer who can handle complex projects.</span>
                        <span className={styles.descriptionText}>Thank you for visiting my portfolio page. Please take a look at my projects, and feel free to contact me if you have any questions or opportunities you&apos;d like to discuss.</span>
                    </div>
                </div>
            <div className={styles.education_section}>
                <h1 style={{paddingTop: '5rem'}} className={styles.textTitle}>Education</h1>
                <div className={styles["utdicon-wrapper"]}>
                    <Image alt="utdicon" width={40} height={40} quality={100} src="/utdicon.png"/>
                </div>
                <h3 className={styles.subTitle}>The University of Texas at Dallas</h3>
                <h6 className={styles.gpa}>GPA: 3.69</h6>
                <h6 style={{fontSize: '1rem', paddingTop: '.5rem', fontWeight: '400'}} className={styles.subTitle}>Bachelor&apos;s of Science - Computer Engineering</h6>
                <h6 style={{fontSize: '1rem', fontWeight: '400'}} className={styles.subTitle}>August 2021 - May 2025</h6>
            </div>
            <div style={{paddingLeft: '10rem', paddingTop: '5rem'}} className={styles.experience_section}>
                <h1 className={styles.textTitle}>Experience</h1>
                    <div className={styles.experience_container} style={{display: 'flex', flexDirection: 'row'}}>
                        <Experience
                            location="IEEE UTD (Student Organization)" 
                            role="Web Developer"
                            description="Using NextJS, HTML, CSS, JS, Vercel, Git, and Figma, I work as a web developer for the IEEE club, creating an engaging and user-friendly website that keeps members informed about club activities and events."
                            icon="/ieeeicon.jpg"
                            dateRange="Janurary 2023 - Present"
                            />
                        <Experience 
                            location="AIAA UTD (Student Organization)"
                            role="Lead Web Developer"
                            description="As the lead web developer for AIAA, I design and develop an interactive website using NextJS, HTML, CSS, JS, Vercel, Git, and Figma to provide members with easy access to relevant information, resources, and news about the club's activities and initiatives. In addition to web development, I also lead the AIAA web development team and organized meetings to ensure the successful completion of tasks and collaboration between team members."
                            icon="/aiaaicon.png"
                            dateRange="September 2022 - Present"
                            />
                        <Experience 
                            location="Hyosung"
                            role="ATM Technician"
                            description="As an ATM technician at Hyosung, I was responsible for assembling, disassembling, diagnosing, repairing, and shipping ATMs. I soldered and followed various manuals to ensure that each machine was properly assembled and repaired. My duties required a high level of technical expertise and attention to detail, as even small errors could have significant consequences. In this role, I worked with precision and care to ensure that each ATM was fully functional and ready for use."
                            icon="/hyosungicon.png"
                            dateRange="June 2022 - August 2022"
                            />
                    </div>
            </div>
        </div>
    </>);
}