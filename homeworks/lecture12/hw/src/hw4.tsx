import {useState} from "react";

function Hw4() {
  const [val, setVal] = useState('');
  const [convertVal, setConvertVal] = useState('');

  const convert = (e) => {
    const arr = ['1st', '2nd', '3rd'];
    const str = e.target.value;
    setVal(str);
    const n = Number(str);
    if (isNaN(n)) {
      setConvertVal(str);
    } else if (n <= 3 && n >= 1) {
      setConvertVal(arr[n - 1]);
    } else {
      setConvertVal(str && str + 'th');
    }
  };

  return (
    <div className="hw4">
      <input className="in" value={val} placeholder="Provide your input" onChange={convert}/>
      <input value={convertVal} readOnly/>
    </div>
  )
}

export default Hw4
