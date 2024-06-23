import React from "react";
import { useState } from "react";


const Hw3 = ()=>{
    const [count, setCount] = useState(0);

    const handleClick = (val)=>{
        setCount(count+val);
    }
    return (
        <>
            <button onClick={()=>handleClick(1)}>+1</button>
            <button onClick={()=>handleClick(10)}>+10</button>
            <button onClick={()=>handleClick(100)}>+100</button>
            <button onClick={()=>handleClick(1000)}>+1000</button>
            <p>{count}</p>
        </>
    )
}

export default Hw3;