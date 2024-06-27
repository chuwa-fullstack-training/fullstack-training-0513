import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const addToCount = (n: number) => {
    setCount(count + n);
  }
  return (
    
    <>
    <div id="flex1">
      <button onClick={() => addToCount(1)}>+1</button>
      <button onClick={() => addToCount(10)}>+10</button>
      <button onClick={() => addToCount(100)}>+100</button>
      <button onClick={() => addToCount(1000)}>+1000</button>
    </div>
      
    <div>
        { count }
    </div>
    </>
  )
}

export default App
