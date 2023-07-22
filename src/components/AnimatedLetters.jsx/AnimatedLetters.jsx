import React from 'react'
import "./animated.scss";
// eslint-disable-next-line react/prop-types
const AnimatedLetters = ({letterClass,strArray,idx}) => {
  console.log(letterClass)
    return (
    <span>
      {
        // eslint-disable-next-line react/prop-types
        strArray.map((char,i)=>(
            <span key={char+i} className={`${letterClass} _${i+idx}`}>
                {char}
            </span>
        ))
      }
    </span>
  )
}

export default AnimatedLetters
