import styles from "./styles/About.module.css";

export default function About() {
    return (<>
        <div id="about" className={styles.container}>
            <div className={styles.gradient}/>
            <div className={styles["title-container"]}>
                <h1 id="scroll-to-about" className={styles.textTitle}>About Me</h1>
            </div>
            <div className={styles.description}>
                <div id="leftbox">
                    <span className={styles.aboutDescription}>Hello! I am Steven Nguyen and I am currently a sophomore pursuing a bachelor&apos;s degree 
                    in Computer Engineering at The University of Texas at Dallas</span>
                </div>
                <div id="rightbox">
                    <span className={styles.text}>hello</span>
                </div>
            </div>

        </div>
    </>);
}