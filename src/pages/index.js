import Canvas from "@/components/Canvas.js";
import NavigationBar from "@/components/NavigationBar.js";
import About from "@/components/About.js";
import { useState} from 'react';
import defaultCanvas from "public/particlesDark";
import Head from 'next/head';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
    setForceStateUpdate(!forceStateUpdate)
  }

  const [forceStateUpdate, setForceStateUpdate] = useState(true);
  var [color, setColor] = useState('#53acb8');
  const setThemeColor = () => {
    let newColor = getColor;
    setColor(newColor);
    setForceStateUpdate(!forceStateUpdate)
  }
  const getColor = () => {
    var color = "#" + (Math.random().toString(16) + "000000").slice(2, 8)
    return color;
  }
  return (<>
    <Head>
      <title>Steven Nguyen&apos;s Portfolio</title>
      <link rel="icon" href="/icons8-computer-64.png"/>
    </Head>
    <div style={{backgroundColor: isDarkMode ? 'black' : 'white'}}className="isDarkMode ? 'dark' : ''">
      <Canvas resetCanvas={forceStateUpdate} themeColor={color} setThemeColor={setThemeColor} isDarkMode={isDarkMode} options={defaultCanvas}/>
      <NavigationBar 
      callBackHandleToggleDarkMode={handleToggleDarkMode} 
      isDarkMode={isDarkMode}/>
      <About />
    </div>
  </>);
}


