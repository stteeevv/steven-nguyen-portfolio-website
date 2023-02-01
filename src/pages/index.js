import Canvas from "../components/Canvas.js"
import NavigationBar from "@/components/NavigationBar.js";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const canvas = document.querySelector('Canvas');
    if (canvas) {
      window['webgl-fluid'].default(canvas);
      console.log('hello');
    } else {
      console.error('Canvas element not found');
    }
  }, []);
  return (<>
    <Canvas/>
    <NavigationBar/>
  </>);
}


