const particlesDark = {
    background: {
        color: {
            value: 'black',
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
                mode: "attract",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                attract: 1,
            },
            repulse: {
                distance: 100,
                duration: 1,
            },
        },
    },
    particles: {
        color: {
            value: "#095249",
        },
        links: {
            color: "#095249",
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
            random: true,
            speed: 2,
            straight: true,
        },
        number: {
            density: {
                enable: true,
                area: 1000,
            },
            value: 160,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 2 },
        },
    },
    detectRetina: true,
}
export default particlesDark;