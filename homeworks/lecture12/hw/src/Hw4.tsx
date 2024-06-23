import React, {useState} from "react";

const Hw4 = ()=>{
    const [count, setCount] = useState(0);
    const [filCount, setFilCount] = useState(0);

    const handleInput = (e)=>{
        setCount(e.target.value);
        const newCount = validInput(e.target.value);
        setFilCount(newCount);
    }

    const validInput=(input)=>{
        const output = parseInt(input);
        if(isNaN(output)){
            return input;
        }
        const lastDigit = output%10;

        switch(lastDigit){
            case 1:
                return `${input}st`
            case 2:
                return `${input}nd`
            case 3:
                return `${input}rd`
            default:
                return `${input}th`
        }

    }

    return (<>
    <input type="text" value={count} onChange={(e)=>handleInput(e)}/>
    <input value={filCount} readOnly/>
    </>)
}

export default Hw4;