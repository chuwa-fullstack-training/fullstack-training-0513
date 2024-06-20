import {useState} from 'react'
import Hw1 from './Hw1';
import Hw2 from './Hw2';
import Hw3 from './Hw3';

const App = () => {
  const [tabIdx, setTabIdx] = useState(0);

  const Content = () => {
    if (tabIdx === 0) return (<Hw1></Hw1>);
    if (tabIdx === 1) return (<Hw2></Hw2>);
    return (<Hw3></Hw3>);
  };

  return (
    <>
      <h2>HW - lecture14</h2>
      <div className="operation">
        <button className={tabIdx === 0 ? 'active' : 'normal'} onClick={() => {
          setTabIdx(0)
        }}>HW1
        </button>
        <button className={tabIdx === 1 ? 'active' : 'normal'} onClick={() => {
          setTabIdx(1)
        }}>HW2
        </button>
        <button className={tabIdx === 2 ? 'active' : 'normal'} onClick={() => {
          setTabIdx(2)
        }}>HW3
        </button>
      </div>
      <Content />
    </>
  )
}

export default App;
