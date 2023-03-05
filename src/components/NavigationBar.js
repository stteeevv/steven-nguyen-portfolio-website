import styles from './styles/NavigationBar.module.css';
import React, { useState, useEffect } from 'react';
import { Switch, Navbar } from '@nextui-org/react';
import { SunIcon } from 'public/sunIcon';
import { MoonIcon } from 'public/moonIcon';



export default function NavigationBar(props) {
    const handleClick = (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    };
      {/* <button onClick={props.callBackHandleToggleDarkMode}>hello</button> */}
    let isDark = props.isDarkMode;
    const [sticky, setSticky] = useState(false);
    const navRef = React.useRef(null);
    const handleScroll = () => {
        if(window.scrollY > navRef.current.offsetTop)
            setSticky(true);
        else
            setSticky(false);

    }
    return (<>
        <Navbar css={{$$navbarBackgroundColor: 'yellow', $$navbarBlurBackgroundColor: "rgba(0, 0, 0, 10)"}} shouldHideOnScroll variant={sticky}>
            <Navbar.Content hideIn="xs" variant="underline">
                <Navbar.Link href="#">Home</Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Projects</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Content>
        </Navbar>




        {/* <nav id="navbar" className={styles.navBar} style={{
            // backgroundColor: isDark ? 'black' : 'white',
            color: isDark ? 'white' : 'black',
            position: sticky ? 'absolute' : 'sticky'
        }}>
            <a role="button" onClick={handleClick} href="#canvas">Home</a>
            <a onClick={handleClick} href="#scroll-to-about">About</a>
            <a>Projects</a>
            <a>Contact</a>
            <a>
                <Switch
                    onChange={props.callBackHandleToggleDarkMode}
                    checked={true}
                    iconOff={<SunIcon filled />}
                    iconOn={<MoonIcon filled />}
                />
            </a>
        </nav> */}
    </>);
}
