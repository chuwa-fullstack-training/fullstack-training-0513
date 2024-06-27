import "./BottomPart.css"

type BottomPartPropType = {
    data: string[],
    buttonClicked: (idx: number) => void
}

export default function BottomPart(props: BottomPartPropType) {
    return <div id="bottompart">
        { props.data.map((value, index) => <div className="centercontent_bottom h75px" key={ index }>
            <div className="centercontent_bottom item_bottom clickable" onClick={ () => props.buttonClicked(index) }>
                { value }
            </div>
        </div>)}
    </div>
}