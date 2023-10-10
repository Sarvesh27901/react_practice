import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Add and subtract game
function App() {
  
  let [count, setCount] = useState(0);
  
  let addValue =()=>{

  if (count<20){
    setCount(count+1)
  }
  
  }


let removeVale=()=>{
  if (count>0){
    setCount(count-1)
  }
}


  return (
    <>
      <h1> Addition and Subtraction game</h1>
      <h3>current value: {counter}</h3>
      <button
      onClick={addValue}>
        Add Value
      </button>
      <button onClick={removeVale}>
        Remove Value
      </button>
    </>
  )
}


export default App
