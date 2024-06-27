import "./Profile.css"
import RepoItem from "./RepoItem"
import { PItemType } from "./PList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RepoItemPropType } from "./RepoItem"
// export type ProfilePropType = {
//     name: string,
//     login: string
//     location: string,
//     repos: {
//         name: string,
//         description: string,
//         repo_url: string
//     }[],
//     img_url: string
// }

export type ProfilePropType = {
    items: PItemType[]

}
export default function Profile(props: ProfilePropType) {
    const login_name = useParams().login;
    
    const [img_url, setImgurl] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [repos, setRepos] = useState<RepoItemPropType[]>([]);

    useEffect(() => {
        let user_url = "", repos_url = "";
        for (const item of props.items) {
            if (item.username === login_name) {
                user_url = item.user_url;
                repos_url = item.repos_url;
            }
        }
        const userfetch: Promise<Response> = fetch(user_url), repofetch = fetch(repos_url);
        Promise.all([userfetch, repofetch])
        .then((resarr: Response[]) => {
          return [resarr[0].json(), resarr[1].json()];
        })
        .then(data_arr => {
          Promise.all(data_arr).then((datas) => {
            const [userdata, repodata] = datas;
            setImgurl(userdata.avatar_url);
            setName(userdata.name);
            setLocation(userdata.location);
            const newrepos: RepoItemPropType[] = []
            for (let i = 0; i < repodata.length; ++i) {
              newrepos.push({
                name: repodata[i].name,
                description: repodata[i].description,
                repo_url: repodata[i].html_url
              });
            }
            setRepos(newrepos);
            // setProfileData(newProfileData);
            // setProfileVisible(true);
          })
          .catch(err => {
            alert(`Failed to process profile data.\n${err}`);
          });
              
        }).catch(err => {
          alert(`Failed to load the profile.\n${err}`);
        });
    }, [])
    return <div id='profile_container'>
        <div id="profile_card">
            <div id="avatar_container">
                <img id="avatar_img" src={ img_url } alt={ img_url } />
            </div>
            <div id="info_container">
                <h2>{ name }</h2>
                <p>Location: { location }</p>
                <p>Repositories:</p>
                <ul>
                    { repos.map((value, index) => {
                        return <RepoItem name={ value.name } key={index} description={ value.description }
                        repo_url={ value.repo_url } />
                    }) }
                </ul>
            </div>
        </div>
    </div>
}