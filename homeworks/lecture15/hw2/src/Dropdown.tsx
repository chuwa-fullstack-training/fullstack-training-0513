import { useState } from "react"
import "./Dropdown.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate, useParams } from "react-router-dom";

export type DropdownItemType = {
    name: string,
    clickHandler: (color: string, index: number) => void 
}

type DropdownPropType = {
    items: DropdownItemType[],
    name: string
}



export default function Dropdown(props: DropdownPropType) {
    const [isopen, setIsopen] = useState<boolean>(false);
    const navigate = useNavigate();
    const toggleDropDownMenu = () => {
        setIsopen((prev) => { return !prev });
    };
    const params = useParams();
    return (
        <div className="dropdown">
            <button className="dropbutton" onClick={ toggleDropDownMenu }>
                { props.name === "" ? props.items[Number(params.id)].name : props.name}&nbsp;
                <i className="fas fa-caret-down"></i>
            </button>
            {
                isopen ? 
                <div className="dropdown_menu">
                {   
                    props.items.map((value, index) => {
                        return <div className="dropdown_item" key={ index } 
                        onClick={ () => { 
                            toggleDropDownMenu(); 
                            if (props.name === "") {
                                navigate(`/${index}`);
                            } else {
                                value.clickHandler(value.name, Number(params.id));
                            }
                        }}>{ value.name }</div>
                    })
                }
                </div> :
                null
            }
            
        </div>
        
    )
}