import { useNavigate } from "react-router-dom"
import "./PListItem.css"

type PListItemPropType = {
    id: number
    username: string,
    img_url: string,
    user_url: string,
    repos_url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onItemClicked: (idx: number) => Promise<any>
}

export default function PListItem(props: PListItemPropType) {
    const navigate = useNavigate();
    const handleItemClicked = () => {
        props.onItemClicked(props.id).then(() => {
            navigate(`/users/${props.username}`);
        })
    }
    return <div id="plist_item" onClick={ handleItemClicked }>
        <div id="plist_id">{ props.id }</div>
        <div id="plist_uname">{ props.username }</div>
        <div id="plist_img"><img className="avatar" src={ props.img_url } alt={ props.img_url }/></div>
    </div>
}