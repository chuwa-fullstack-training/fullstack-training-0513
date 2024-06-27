
import { useState } from 'react'
import './App.css'

function App() {
  const [rep, setRep] = useState("");
  const [indata, setIndata] = useState("");
  const calcRep = () => {
    const num: number = Number(indata);
    let newrep: string = "";
    if (!isNaN(num)) {
      if (num % 100 >= 10 && num % 100 <= 20) {
        newrep = num + "th";
      } else if (num - Math.floor(num / 10) * 10 === 1) {
        newrep = num + "st";
      } else if (num - Math.floor(num / 10) * 10 === 2) {
        newrep = num + "nd";
      } else if (num - Math.floor(num / 10) * 10 === 3) {
        newrep = num + "rd";
      }
    } else {
      newrep = indata;
    }
    setRep(newrep);
  }

  return (
    <>
      <input type='text' id="datain" onChange={ (e) => setIndata(e.target.value)} onBlur={ calcRep }/>
      <input type='text' id="dataout" value={ rep } disabled />
    </>
  )
}

export default App
