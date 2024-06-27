import "./PListItem.css"

type PListItemPropType = {
    id: number
    username: string,
    img_url: string,
    user_url: string,
    repos_url: string,
    onItemClicked: (idx: number) => void
}

export default function PListItem(props: PListItemPropType) {
    return <div id="plist_item" onClick={ () => props.onItemClicked(props.id) }>
        <div id="plist_id">{ props.id }</div>
        <div id="plist_uname">{ props.username }</div>
        <div id="plist_img"><img className="avatar" src={ props.img_url } alt={ props.img_url }/></div>
    </div>
}