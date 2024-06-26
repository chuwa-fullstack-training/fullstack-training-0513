import React, {useState} from "react";
import './hw3.css';

const hw3 = () =>{
    const [count, setCount] = useState(0);

    return(
        <div className="counter-container">
            <div className="button">
                <button onClick={() => setCount(count + 1)}></button>
                <button onClick={() => setCount(count + 10)}></button>
                <button onClick={() => setCount(count + 100)}></button>
                <button onClick={() => setCount(count + 1000)}></button>
            </div>
            <div className="count-display">{count}</div>
            <button className="reset-botton" onClick={()=> setCount(0)}>Reset</button>
        </div>
    );
};

export default hw3;