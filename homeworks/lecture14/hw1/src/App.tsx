import { useEffect, useState } from 'react'
import './App.css'
import PList, { PItemType } from './PList'
import Profile, { ProfilePropType } from './Profile';
/*
export type PItemType = {
    username: string,
    img_url: string,
    user_url: string,
    repos_url: string,
    onItemClicked: (idx: number) => void
}
*/
function App() {
  // const [plistdata, setPlistdata] = useState<PItemType[]>([
  //   {
  //     username: "a", 
  //     img_url: "aaa.url", 
  //     onItemClicked: (idx: number) => {console.log("a " + idx);}
  //   },
  //   {
  //     username: "a", 
  //     img_url: "aaa.url", 
  //     onItemClicked: (idx: number) => {console.log("a " + idx);}
  //   },
  //   {
  //     username: "a", 
  //     img_url: "aaa.url", 
  //     onItemClicked: (idx: number) => {console.log("a " + idx);}
  //   },
  //   {
  //     username: "a", 
  //     img_url: "aaa.url", 
  //     onItemClicked: (idx: number) => {console.log("a " + idx);}
  //   },
  //   {
  //     username: "a", 
  //     img_url: "aaa.url", 
  //     onItemClicked: (idx: number) => {console.log("a " + idx);}
  //   },
  //   {
  //     username: "a", 
  //     img_url: "aaa.url", 
  //     onItemClicked: (idx: number) => {console.log("a " + idx);}
  //   },
  //   {
  //     username: "a", 
  //     img_url: "aaa.url", 
  //     onItemClicked: (idx: number) => {console.log("a " + idx);}
  //   },
  //   {
  //     username: "a", 
  //     img_url: "aaa.url", 
  //     onItemClicked: (idx: number) => {console.log("a " + idx);}
  //   },
  //   {
  //     username: "a", 
  //     img_url: "aaa.url", 
  //     onItemClicked: (idx: number) => {console.log("a " + idx);}
  //   },
  //   {
  //     username: "a", 
  //     img_url: "aaa.url", 
  //     onItemClicked: (idx: number) => {console.log("a " + idx);}
  //   },
  //   {
  //     username: "a", 
  //     img_url: "aaa.url", 
  //     onItemClicked: (idx: number) => {console.log("a " + idx);}
  //   },
  //   {
  //     username: "a", 
  //     img_url: "aaa.url", 
  //     onItemClicked: (idx: number) => {console.log("a " + idx);}
  //   },
  // ]);
  const [plistdata, setPlistdata] = useState<PItemType[]>([]);
  const [profileData, setProfileData] = useState<ProfilePropType>({
    name: "",
    location: "",
    repos: [],
    img_url: ""
  });
  const [profileVisible, setProfileVisible] = useState<boolean>(false);
  useEffect(() => {
    fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newplistdata: PItemType[] = data.map((value: any) => {
        return {
          username: value.login,
          img_url: value.avatar_url,
          user_url: value.url,
          repos_url: value.repos_url,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onItemClicked: (idx: number) => {
            const userfetch: Promise<Response> = fetch(value.url), repofetch = fetch(value.repos_url);
            Promise.all([userfetch, repofetch])
            .then((resarr: Response[]) => {
              return [resarr[0].json(), resarr[1].json()];
            })
            .then(data_arr => {
              Promise.all(data_arr).then((datas) => {
                const [userdata, repodata] = datas;
                
                const newProfileData: ProfilePropType = {
                  name: userdata.name,
                  location: userdata.location,
                  repos: [],
                  img_url: userdata.avatar_url
                };
                for (let i = 0; i < 3 && i < repodata.length; ++i) {
                  newProfileData.repos.push({
                    name: repodata[i].name,
                    description: repodata[i].description,
                    repo_url: repodata[i].html_url
                  });
                }
                setProfileData(newProfileData);
                setProfileVisible(true);
              })
              .catch(err => {
                alert(`Failed to process profile data.\n${err}`);
              });
              
            }).catch(err => {
              alert(`Failed to load the profile.\n${err}`);
            });
          }
        };
      });
      setPlistdata(() => {return newplistdata});
    })
    .catch(err => {
      alert(`Failed to load the user list.\n${err}`);
    })
  }, []);
  return (
    <div id="app_container">
      <PList datalist={ plistdata }/>      
      { 
        profileVisible ? <Profile name={profileData.name} location={profileData.location}
        repos={profileData.repos} img_url={profileData.img_url} /> : null 
      }
    </div>
  )
}

export default App
