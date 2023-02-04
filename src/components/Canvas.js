import TitleBox from "./TitleBox.js";
import styles from "./styles/canvas.module.css";
import { useCallback, useLayoutEffect, useState } from "react";
import Particles, {setParticles} from "react-particles";
import { loadFull } from "tsparticles";
import { isAbsoluteUrl } from "next/dist/shared/lib/utils.js";
import particlesDark from "../../public/particlesDark.js"
import particlesLight from "../../public/particlesLight.js"

export default function Canvas() {
    //particles init
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    //dark mode toggle
    const [options, setOptions] = useState(particlesDark);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const handleToggleDarkMode = () => {
      console.log(isDarkMode)
        if(isDarkMode) {
            setOptions(particlesLight);
        }
        else {
            setOptions(particlesDark);
        }
        setIsDarkMode(!isDarkMode);
    };
    const toggleableStyles = {

    }
    
    return (<>
        <button onClick={handleToggleDarkMode}>hello</button>
        <div className={styles.canvas}>
            <Particles className={styles.particles}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}
            />
            <div className={styles.container}>
                    <TitleBox id="titleBox" isDarkMode={isDarkMode}/>
            </div>
        </div>
    </>);
}

