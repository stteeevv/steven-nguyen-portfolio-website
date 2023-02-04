import { particleTest } from "./Canvas";
import styles from "./styles/title-box.module.css";
import about from "./About.js";


export default function TitleBox(props) {
    const toggleableStyles = {
        light: {
            color: '#0a0a0a'
        },
        dark: {
            color: 'white'
        }
    }
    const handleClick = (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      };
    return (<>
        <div className={styles["title-box"]} id="title-box">
            <div className={styles["top-title-box"]}>
                <span style={props.isDarkMode ? toggleableStyles.dark : toggleableStyles.light} className={styles["title-text"]}>Hello, I&apos;m </span>
                <button>
                    <span id="name" style={{...(props.isDarkMode ? toggleableStyles.dark : toggleableStyles.light), color: '#53acb8', "marginLeft": '.3em'}} className={styles["title-text"] + " " + styles.name}> Steven Nguyen</span><span style={props.isDarkMode ? toggleableStyles.dark : toggleableStyles.light} className={styles["title-text"]}>.</span>
                </button>
            </div>
            <span style={props.isDarkMode ? toggleableStyles.dark : toggleableStyles.light} className={styles["title-text"] + " " + styles["bottom-text"]}>I&apos;m an aspiring software engineer.</span>
            <button style={props.isDarkMode ? toggleableStyles.dark : toggleableStyles.light} className={styles.button} onClick={handleClick} href='#scroll-to-about'>About me</button>
        </div>
    </>);
}