import { particleTest } from "./Canvas";
import styles from "./styles/title-box.module.css";
import about from "./About.js";

export default function TitleBox() {
    const handleClick = (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      };
    return (<>
        <div className={styles["title-box"]} id="title-box">
            <div className={styles["top-title-box"]}>
                <span className={styles["title-text"]}>Hello, I'm </span>
                <span className={styles["title-text"]} style={{color: '#53acb8', ["marginLeft"]: '.3em'}}> Steven Nguyen</span><span className={styles["title-text"]}>.</span>
            </div>
            <span className={styles["title-text"] + " " + styles["bottom-text"]}>I'm an aspiring software engineer.</span>
            <button className={styles.button} onClick={handleClick} href='#about'>About me</button>
        </div>
    </>);
}