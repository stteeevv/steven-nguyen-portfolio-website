import TitleBox from "./TitleBox.js";
import styles from "./styles/canvas.module.css";

export default function Canvas() {
    return (<>
        <div className={styles.canvas} id="canvas">
            <TitleBox/>
        </div>
    </>);
}