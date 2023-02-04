import Canvas from "@/components/Canvas.js";
import NavigationBar from "@/components/NavigationBar.js";
import About from "@/components/About.js";
import { useState} from 'react';

export default function Home() {

  return (<>
    <div className="isDarkMode ? 'dark' : ''">
      <Canvas/>
      {/* <NavigationBar/> */}
      <About />
    </div>
  </>);
}


