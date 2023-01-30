import styles from "./styles/title-box.module.css";

export default function TitleBox() {
    return (<>
        <div className={styles["title-box"]} id="title-box">
            <div className={styles["top-title-box"]}>
                <span className={styles["title-text"]}>Hello, I'm </span>
                <span className={styles["title-text"]} style={{color: '#53acb8', ["margin-left"]: '.3em'}}> Steven Nguyen</span><span className={styles["title-text"]}>.</span>
            </div>
            <p className={styles["title-text"]}>I'm an aspiring software engineer.</p>
        </div>
    </>);
}