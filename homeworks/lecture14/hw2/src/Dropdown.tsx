import { useState } from "react"
import "./Dropdown.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

export type DropdownItemType = {
    name: string,
    clickHandler: () => void 
}

type DropdownPropType = {
    items: DropdownItemType[],
    selected: number
    name: string
}



export default function Dropdown(props: DropdownPropType) {
    const [isopen, setIsopen] = useState<boolean>(false);
    
    const toggleDropDownMenu = () => {
        setIsopen((prev) => { return !prev });
    };

    return (
        <div className="dropdown">
            <button className="dropbutton" onClick={ toggleDropDownMenu }>
                { props.name === "" ? props.items[props.selected].name : props.name}&nbsp;
                <i className="fas fa-caret-down"></i>
            </button>
            {
                isopen ? 
                <div className="dropdown_menu">
                {   
                    props.items.map((value, index) => {
                        return <div className="dropdown_item" key={ index } 
                        onClick={ () => { value.clickHandler(); toggleDropDownMenu(); }}>{ value.name }</div>
                    })
                }
                </div> :
                null
            }
            
        </div>
        
    )
}