import { useDispatch } from "react-redux"
import "./ListItem.css"
import { delete_todo } from "./redux/thunks";

export type ListItemPropType = {
    id: string,
    title: string,
    description: string,
    created_time: Date,
    deadline: Date
}

export default function ListItem(props: ListItemPropType) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(delete_todo(props.id));
    }

    return <div className="listitem">
        <div className="listitem_title center">{props.title}</div>
        <div className="listitem_description center">{props.description}</div>
        <div className="listitem_created_time center">
            {props.created_time.getUTCMonth() + 1}/{props.created_time.getUTCDate()}/{props.created_time.getUTCFullYear()}&nbsp;
            {String(props.created_time.getUTCHours()).padStart(2, '0')}:{String(props.created_time.getUTCMinutes()).padStart(2, '0')}
            :{String(props.created_time.getUTCSeconds()).padStart(2, '0')}
        </div>
        <div className="listitem_deadline center">
            {props.deadline.getUTCMonth() + 1}/{props.deadline.getUTCDate()}/{props.deadline.getUTCFullYear()}&nbsp;
            {String(props.deadline.getUTCHours()).padStart(2, '0')}:{String(props.deadline.getUTCMinutes()).padStart(2, '0')}
            :{String(props.deadline.getUTCSeconds()).padStart(2, '0')}
        </div>
        <div className="listitem_delete center"><button onClick={ handleDelete }>Delete</button></div>
    </div>
}

export function ListTitle() {
    return <div className="listitem">
        <div className="listitem_title center bold">Title</div>
        <div className="listitem_description center bold">Description</div>
        <div className="listitem_created_time center bold">Created Time</div>
        <div className="listitem_deadline center bold">Deadline</div>
        <div className="listitem_delete center bold">Options</div>
    </div>
}