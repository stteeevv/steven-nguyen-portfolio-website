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

    return (<>
        {/* <Layout>
            <Navbar shouldHideOnScroll variant={sticky}>
            </Navbar>
        </Layout> */}
        <nav id="navbar" className={styles.navBar} style={{
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
        </nav>
    </>);
}
