import Canvas from "@/components/Canvas.js";
import NavigationBar from "@/components/NavigationBar.js";
import About from "@/components/About.js";
import Loading from "@/components/Loading.js";
import { Suspense } from "react";

export default function Home() {
  return (<>
    {/* <Suspense fallback={<Loading/>}> */}
      <Canvas/>
      {/* <NavigationBar/> */}
      <About />
    {/* </Suspense> */}
  </>);
}


