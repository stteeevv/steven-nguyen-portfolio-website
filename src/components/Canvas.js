import TitleBox from "./TitleBox.js";
import styles from "./styles/canvas.module.css";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { isAbsoluteUrl } from "next/dist/shared/lib/utils.js";


export default function Canvas() {
    const options = {
        background: {
            color: {
                value: "black",
            },
        },
        fullScreen: false,
        style: {
            position: "absolute"
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 1,
                },
                repulse: {
                    distance: 100,
                    duration: .9,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 100,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (<>
        <div className={styles.canvas}>
            <Particles
                style={{"height": "500px;"}}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}
            />
            <div className={styles.container}>
                    <TitleBox id="titleBox"/>
            </div>
        </div>
    </>);
}

