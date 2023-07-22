import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

// or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap, MotionPathPlugin,DrawSVGPlugin } from "gsap/all";
import { useLayoutEffect,useRef } from 'react';
function App() {
  const [count, setCount] = useState(0)
  const app = useRef();
  const circle = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.to(".box", { rotation: 360 });
      // or refs
      gsap.to(circle.current, { rotation: 360 });
      
    }, app);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={app} className="App">
      <div className="box">selector</div>
      <div className="circle" ref={circle}>Ref</div>
    </div>
  );
}



gsap.registerPlugin(ScrollTrigger,DrawSVGPlugin, Draggable, Flip, MotionPathPlugin);

export default App
