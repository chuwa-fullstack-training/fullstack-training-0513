import "./RepoItem.css"

export type RepoItemPropType = {
    name: string,
    description: string,
    repo_url: string
}

export default function RepoItem(props: RepoItemPropType) {
    return <li>
        <p>
            <a href={ props.repo_url }>{ props.name }</a>
        </p>
        <p>{props.description}</p>
    </li>
}