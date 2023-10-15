import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
  const[height,setHeight] = useState(300);
  return (
    <div id="main">
      <img src={star}  height={`${height}+px`} width={`${height}+px`} onClick{()=>{
        setHeight((oldValue)=>{
          return oldValue+2;
      })
    }}/>
    </div>
  )
}


export default App;
