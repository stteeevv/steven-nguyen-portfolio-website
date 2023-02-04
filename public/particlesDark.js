const particlesDark = {
    background: {
        color: {
            // value: "#174b52",
            value: "#000000", //can only be hex value
        },
    },
    fullScreen: false,
    style: {
        position: "absolute"
    },
    fpsLimit: 500,
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
            // value: "#ffffff",
            // value: "#99c6cc",
            // value: "#8a8a8a",
            // value: "#7e64a1",
            value: "#095249",
        },
        links: {
            // color: "#ffffff",
            // color: "#99c6cc",
            // color: "#8a8a8a",
            // color: "#7e64a1",
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

export default particlesDark;