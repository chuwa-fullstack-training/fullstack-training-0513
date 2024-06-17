import {useState} from 'react'
import Hw1 from './Hw1';
import Hw2 from './Hw2';

const App = () => {
  const [isHw1, setIsHw1] = useState(true);

  return (
    <>
      <h2>HW - lecture13</h2>
      <div className="operation">
        <button className={isHw1 ? 'active' : 'normal'} onClick={() => { setIsHw1(true) }}>HW1</button>
        <button className={isHw1 ? 'normal' : 'active'} onClick={() => { setIsHw1(false) }}>HW2</button>
      </div>
      {
        isHw1
          ? <Hw1></Hw1>
          : <Hw2></Hw2>
      }
    </>
  )
}

export default App;
