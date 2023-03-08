import TitleBox from "./TitleBox.js";
import styles from "./styles/canvas.module.css";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesDark from "public/particlesDark.js";

export default function Canvas(props) {
    let options = particlesDark;
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);
    options.particles.links.color = props.themeColor;
    options.particles.color.value = props.themeColor;
    if(props.isDarkMode)
        options.background.color = 'black';
    else if (!props.isDarkMode) {
        options.background.color = '#e0e0e0';
    }
    return (<>
        <div id="canvas" className={styles.canvas}>
            <Particles className={styles.particles}
                propToUpdate={props.resetCanvas}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}
            />
            <div className={styles.container}>
                <TitleBox myProp={props.options} 
                onChangeBackground={props.setThemeColor} 
                nameColor={props.themeColor}
                id="titleBox" 
                isDarkMode={props.isDarkMode}
            />
            </div>
        </div>
    </>);
}

