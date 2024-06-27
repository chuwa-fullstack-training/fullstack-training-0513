import { useState } from "react";
import "./Comp.css"

type CompPropType = {
    id: number,
    name: string,
    color: string,
    nameChangeHandler: (name: string) => void
};

export default function Comp(props: CompPropType) {
    const [inputdata, setInputdata] = useState<string>(props.name);
    return <div className="comp" style={{backgroundColor: props.color}}>
        <div className="comptitle">Component name: </div>
        <input className="inputfield" type="text" value={ inputdata } 
            onChange={(e) => setInputdata(e.target.value)} 
            onBlur={ () => props.nameChangeHandler(inputdata) }/>
    </div>
}