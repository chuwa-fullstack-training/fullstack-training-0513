import style from "./hw1.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface repoType {
  name: string,
  description: string
}

interface userType {
  id: number,
  login: string,
  avatar_url: string,
  location: string,
  url: string,
  repos_url: string
}

const Detail = () => {
  const [currentUser, setCurrentUser] = useState<userType | null>(null);
  const [repos, setRepos] = useState<repoType[] | null>(null);

  const { name} = useParams();

  useEffect(() => {
    if (name) {
      const userUrl = `https://api.github.com/users/${name}`;
      const reposUrl = `https://api.github.com/users/${name}/repos`;
      getUserDetail(userUrl, reposUrl);
    }
  }, []);

  const getUserDetail = async (userUrl: string, reposUrl: string) => {
    setCurrentUser(null);
    setRepos(null);
    const requests = [fetch(userUrl), fetch(reposUrl)];
    try {
      const response = await Promise.all(requests);
      if (response[0].ok && response[1].ok) {
        const res = await Promise.all(response.map((r) => r.json()));
        setCurrentUser(res[0]);
        setRepos(res[1]);
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className={style.detail}>
      {
        (currentUser && repos)
          ?
          <div className={style.content}>
            <img src={currentUser.avatar_url} alt=''/>
            <div className={style.des}>
              <p>{currentUser.login}</p>
              <p>Location: {currentUser.location}</p>
              <p>Repositories</p>
              <ul>
                {
                  repos.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <span>{item.description}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          :
          <div className={style.content}>
            <div className={style.ske_avatar}></div>
            <div className={style.ske_text}>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
      }
    </div>
  );
};

export default Detail;