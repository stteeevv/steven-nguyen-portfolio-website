import styles from "./styles/About.module.css";

export default function About() {
    return (<>
        <div id="about" className={styles.container}>
            <div className={styles.gradient}/>
            <div className={styles["title-container"]}>
                <span id="scroll-to-about" className={styles.textTitle}>About Me</span>
                <p className={styles.titleDescription}>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className={styles.description}>
                <div id="leftbox">
                    <span className={styles.text}>Hello! I am currently a sophomore pursuing a bachelor&apos;s degree 
                    in Computer Engineering at The University of Texas at Dallas</span>
                </div>
                <div id="rightbox">
                    <span className={styles.text}>hello</span>
                </div>
            </div>

        </div>
    </>);
}