import "./MainPart.css"
type buttonClickFuncType = (idx: number) => void;

type MainPartProp = {
    data: string[],
    buttonClicked: buttonClickFuncType
};

export default function MainPart(props: MainPartProp) {
    return <div id="mainpart">
        { props.data.map((value, index) => 
        <div className="centercontent" key={ index }> 
        <div className="centercontent item clickable" onClick={ () => props.buttonClicked(index) }>
        { value }
        </div>
        </div>) }
    </div>

}