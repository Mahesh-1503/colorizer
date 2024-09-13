import React, { useState } from 'react'

const Colorize = () => {
    const [color, setColor] = useState('#d3f6f3');
   const randomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor)
   }
  return (
    <div className='colorize'>
        
        <div className='colorize-container' style={{backgroundColor: color}}><button>{color}</button></div>
        
         <button onClick = {randomColor} className='colorize-button'>Change Color</button>
        {/* Styles for Colorize component will be added in App.css */}
    </div>
  )
}

export default Colorize
