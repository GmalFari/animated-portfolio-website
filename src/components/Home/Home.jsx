/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import LogoTitle from "../../assets/images/logo-s.png"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters.jsx/AnimatedLetters"
import Logo from "./Logo/Logo"
const Home = () => {
  const [lettterClass,setLetterClass] = useState('text-animate');
  const nameStr = "alahuddin";
  const jobStr = "Business Translator.";
  const nameArray = Object.assign([],nameStr);
  const jobArray = Object.assign([],jobStr)
  useEffect(()=>{
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
  },[])
  return (
    <div className="container home-page">
      <div className="text-zone">
            <h1>
            <span className={lettterClass} >H</span>
            <span className={`${lettterClass } _6`}>i,</span>             <br/>
             <span className={`${lettterClass } _7`}>I</span>
             <span className={`${lettterClass } _8`}>,m</span>

            <img src={LogoTitle} alt="translator"/>
            <AnimatedLetters letterClass={lettterClass}
              strArray={nameArray}
              idx={nameArray.length }
             />
            <br/>
            <AnimatedLetters letterClass={lettterClass}
              strArray={jobArray}
              idx={jobArray.length }
             />
            </h1>
            <h2>Bussiness translator /  Teacher </h2>
            <Link to="/contact" className="flat-button" >CONTACT ME</Link>
      </div>
       <Logo/>
      </div>
        
  )
}

export default Home
