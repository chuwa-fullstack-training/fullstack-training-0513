import { useNavigate, useParams } from "react-router-dom"
import "./ControlBar.css"
import Dropdown, { DropdownItemType } from "./Dropdown"
import { CNACItemType } from "./App"

type ControlBarPropType = {
    componentNamesAndColor: CNACItemType[],
    changeDataColor: (color: string, index: number) => void  
}

export default function ControlBar(props: ControlBarPropType) {

    // const [selected, setSelected] = useState<number>(0);
    const navigate = useNavigate();
    const select_items: DropdownItemType[] = props.componentNamesAndColor.map((value: CNACItemType, index: number) => {
        return {
            name: value.name,
            clickHandler: () => {
                navigate(`/${index}`);
            }
        }
    })
    const colorNames: string[] = ["red", "blue", "green", "yellow", "purple", 
            "orange", "pink", "brown", "gray", "cyan", "white"];
    const color_items: DropdownItemType[] = colorNames.map((value) => {
        return {
            name: value,
            clickHandler: props.changeDataColor
        }
    })
    const params = useParams();
    if (isNaN(Number(params.id)) || Number(params.id) < 0 || Number(params.id) >= 6) {
        return <h1>Error</h1>
    }
    return <>
        <div className='control_bar'> 
            <Dropdown name='' items={ select_items }/>
            <Dropdown name='Choose color' items={ color_items }/>
        </div>
        
    </>
}