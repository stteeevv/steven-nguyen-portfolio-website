import TitleBox from "./TitleBox.js";
import styles from "./styles/canvas.module.css";
import { useCallback, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesDark from "public/particlesDark.js";

export default function Canvas(props) {
    let options = particlesDark;
    //particles init
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    const getColor = () => {
        var color = "#" + (Math.random().toString(16) + "000000").slice(2, 8)
        return color;
    }
    if(props.isDarkMode)
        options.background.color = 'black';
    else if (!props.isDarkMode) {
        options.background.color = '#FFFFFF';
    }
    const [forceStateUpdate, setForceStateUpdate] = useState(true);
    var [color, setColor] = useState('#53acb8');
    const handleChangeBackground = () => {
        var newColor = getColor();
        setColor(newColor);
        console.log(color);
        options.particles.links.color = newColor;
        options.particles.color.value = newColor;
        setForceStateUpdate(!forceStateUpdate)
    }
    return (<>
        <div className={styles.canvas}>
            <Particles className={styles.particles}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}
                isDarkMode={props.isDarkMode}
                propToUpdate={forceStateUpdate}
            />
            <div className={styles.container}>
                    <TitleBox myProp={props.options} 
                    onChangeBackground={handleChangeBackground} 
                    nameColor={color}
                    id="titleBox" isDarkMode={props.isDarkMode}/>
            </div>
        </div>
    </>);
}

