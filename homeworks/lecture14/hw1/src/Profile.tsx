import "./Profile.css"
import RepoItem from "./RepoItem"


export type ProfilePropType = {
    name: string,
    location: string,
    repos: {
        name: string,
        description: string,
        repo_url: string
    }[],
    img_url: string
}

export default function Profile(props: ProfilePropType) {
    return <div id='profile_container'>
        <div id="profile_card">
            <div id="avatar_container">
                <img id="avatar_img" src={ props.img_url } alt={ props.img_url } />
            </div>
            <div id="info_container">
                <h2>{ props.name }</h2>
                <p>Location: { props.location }</p>
                <p>Repositories:</p>
                <ul>
                    { props.repos.map((value, index) => {
                        return <RepoItem name={ value.name } key={index} description={ value.description }
                        repo_url={ value.repo_url } />
                    }) }
                </ul>
            </div>
        </div>
    </div>
}