import { useEffect, useState } from "react";
import "./Comp.css"
import { CNACItemType } from "./App";
import { useParams } from "react-router-dom";

type CompPropType = {
    datas: CNACItemType[],
    nameChangeHandler: (name: string, index: number) => void
};

export default function Comp(props: CompPropType) {
    const params = useParams();
    const idx = Number(params.id);
    const [inputdata, setInputdata] = useState<string>(props.datas[idx].name);
    useEffect(() => {
        setInputdata(props.datas[idx].name);
    }, [idx]);
    // if (isNaN(idx) || idx > props.datas.length) {
    //     haserror = true;
    // }
    
    if (isNaN(Number(params.id)) || Number(params.id) < 0 || Number(params.id) >= 6) {
        return <h1>Error</h1>
    }
        
    return (
    <div className="comp" style={{backgroundColor: props.datas[idx].color}}>
        <div className="comptitle">Component name: </div>
        <input className="inputfield" type="text" value={ inputdata } 
            onChange={(e) => setInputdata(e.target.value)} 
            onBlur={ () => props.nameChangeHandler(inputdata, idx) }/>
    </div>)
    
    
    
}