import styles from "./styles/title-box.module.css";
import about from "./About.js";
import { Button } from '@nextui-org/react';
import { Tooltip } from '@nextui-org/react';

let color = "#FFFFFF"
export default function TitleBox(props) {
    let options = props.myProp;
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
                <span style={props.isDarkMode ? toggleableStyles.dark : toggleableStyles.light} className={styles["title-text"]}>Hello, I&apos;m</span>
                {/* <Tooltip content={"click me"} color={'invert'}> */}
                    <button>
                        <span onClick={() => {props.onChangeBackground();}} id="name" style= {{'color': props.nameColor, "marginLeft": '.3em', backgroundImage: !props.isDarkMode ? 'linear-gradient(black, black)' : 'linear-gradient(white, white)'}} className={styles["title-text"] + " " + styles.name}> Steven Nguyen</span><span style={props.isDarkMode ? toggleableStyles.dark : toggleableStyles.light} className={styles["title-text"]}>.</span>
                    </button>
                {/* </Tooltip> */}
            </div>
            <span style={props.isDarkMode ? toggleableStyles.dark : toggleableStyles.light} className={styles["bottom-title-text"] + " " + styles["bottom-text"]}>I&apos;m an aspiring software engineer.</span>
                <button style={{
                    ...(props.isDarkMode ? toggleableStyles.dark : toggleableStyles.light),
                    backgroundColor: props.isDarkMode ? 'black' : 'white',
                    borderColor: props.isDarkMode ? 'white' : 'black'
                }} className={styles.button} onClick={handleClick} href='#scroll-to-about'>About me</button>{/* <Button bordered >About me</Button> */}
        </div>
    </>);
}