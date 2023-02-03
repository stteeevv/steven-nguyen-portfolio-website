import styles from "./styles/About.module.css";

export default function About() {
    return (<>
        <div id="about" className={styles.container}>
            <div className={styles.gradient}/>
            <div id="about-container" className={styles["about-container"]}>
                <span className={styles.textTitle}>About Me</span>
            </div>
            <div className={styles.description}>
                <div id="leftbox">
                    <span className={styles.text}>Hello! I am currently pursuing a bachelor's degree 
                    in Computer Engineering at The University of Texas at Dallas</span>
                </div>
                <div id="rightbox">
                    <span className={styles.text}>hello</span>
                </div>
            </div>

        </div>
    </>);
}