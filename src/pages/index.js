import Canvas from "@/components/Canvas.js";
import NavigationBar from "@/components/NavigationBar.js";
import About from "@/components/About.js";
import { useState} from 'react';
import darkModeHook from "@/components/darkModeHook";
import defaultCanvas from "public/particlesDark";
// import particlesHook from "@/components/particlesHook";
import particlesLight from "public/particlesLight";

export default function Home() {
  let canvasOptions = defaultCanvas;
  const [isDarkMode, setIsDarkMode] = useState(true);
  // const [canvasColor, setCanvasColor] = useState(defaultCanvas.background.color)
  // let light = "#f2f2f2";
  // let dark = "black";
  // const handleToggleDarkMode = () => {
  //   console.log(isDarkMode)
  //     if(isDarkMode) {
  //         setCanvasColor(light);
  //         options.background.color = light;
  //     }
  //     else {
  //         setCanvasColor("black");
  //         options.background.color = dark;
  //     }
  //     setIsDarkMode(!isDarkMode);
  // };   
  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  }
  return (<>
    <div className="isDarkMode ? 'dark' : ''">
      <Canvas isDarkMode={isDarkMode} options={defaultCanvas}/>
      <NavigationBar 
      callBackHandleToggleDarkMode={handleToggleDarkMode} 
      isDarkMode={isDarkMode}/>
      {/* <About /> */}
    </div>
  </>);
}


