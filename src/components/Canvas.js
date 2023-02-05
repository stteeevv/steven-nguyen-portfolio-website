import TitleBox from "./TitleBox.js";
import styles from "./styles/canvas.module.css";
import { useCallback, useState } from "react";
import Particles, {setParticles} from "react-particles";
import { loadFull } from "tsparticles";
import particlesDark from "public/particlesDark.js";
import particlesLight from "public/particlesLight.js";
import particlesDarkRandomColor from "public/particlesDarkRandomColor.js";
import particlesLightRandomColor from "public/particlesLightRandomColor.js";

let options = particlesDark;
export default function Canvas(props) {
    //particles init
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    // const [lineColor, setLineColor] = useState(props.options);
    // const handleChangeBackground = (newLineColor) => {
    //     setLineColor(newLineColor)
    //     particlesOptions.particles.color = newLineColor;
    //     particlesOptions.particles.links = newLineColor;
    //     console.log("HI")
    // }
    const [lineColor, setLineColor] = useState(props.options.particles.links.color);
    const handleChangeBackground = () => {
        setLineColor('blue');
        console.log(lineColor);
        if(props.isDarkMode) {
            options = particlesDarkRandomColor;
            console.log("first");
        }
        else {
            options = particlesLightRandomColor;
            console.log("second");
        } 
        console.log("test 123");
    }
    if(props.isDarkMode) options = particlesDark;
    else  options = particlesLight;
    return (<>
        <button onClick={handleChangeBackground}>hello</button>
        <div className={styles.canvas}>
            <Particles className={styles.particles}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}
            />
            <div className={styles.container}>
                    <TitleBox myProp={props.options} 
                    // onChangeBackground={handleChangeBackground} 
                    id="titleBox" isDarkMode={props.isDarkMode}/>
            </div>
        </div>
    </>);
}

