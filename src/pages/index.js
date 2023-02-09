import Canvas from "@/components/Canvas.js";
import NavigationBar from "@/components/NavigationBar.js";
import About from "@/components/About.js";
import { useState} from 'react';
import defaultCanvas from "public/particlesDark";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
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
      <About />
    </div>
  </>);
}


