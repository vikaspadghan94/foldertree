import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  // let counter = 15 above hooks creating the counter object 
  const addValue = () => {
    if (counter < 30) { // Limiting addition up to 30
      setCounter(counter + 1);
      console.log("Clicked", counter);
    }
  };

  // const  addValue = () => {
  //   counter = counter +1 ; // we can simply add this in set counter eg in counter + 1 working same
  //   setCounter(counter)
  //   console.log("Clicked", counter);
  // }
  
const removeValue = () => {
  if (counter > 0) {
    setCounter(counter-1);
    
  }else {
    setCounter(0);
  }
  
}

  return (
    <>
      <h1>chai , vikas aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
