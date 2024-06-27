import "./PList.css"
import PListItem from "./PListItem"

export type PItemType = {
    username: string,
    img_url: string,
    user_url: string,
    repos_url: string,
    onItemClicked: (idx: number) => void
}

type PListPropType = {
    datalist: PItemType[]
}



export default function PList(props: PListPropType) {
    return <div style={{ display: "flex", flexDirection: "column"}}>
        <div id="plist_title">
            <div id="title_id" className="centertext">ID</div>
            <div id="title_uname" className="centertext">Username</div>
            <div id="title_img" className="centertext">Image</div>
        </div>
        <div id='list_container'>
        {
            props.datalist.map((value, index) => 
                <PListItem id={ index } key={ index } username={ value.username } 
                img_url={ value.img_url } user_url={value.user_url} repos_url={ value.repos_url }
                 onItemClicked={ value.onItemClicked }/>)
        }
        </div>
    </div>
}