import {useEffect, useState} from "react";
import style from "./hw1.module.css";

interface userType {
  id: number,
  login: string,
  avatar_url: string,
  location: string,
  url: string,
  repos_url: string
}

interface repoType {
  name: string,
  description: string
}

const Hw1 = () => {
  const [users, setUsers] = useState<userType[]>([]);
  const [currentUser, setCurrentUser] = useState<userType | null>(null);
  const [repos, setRepos] = useState<repoType[] | null>(null);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const response = await fetch('https://api.github.com/users');
      if (response.ok) {
        const res = await response.json() as userType[];
        setUsers(res);
      }
    } catch (e) {
      alert(e);
    }
  };

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
    <div className={style.hw1}>
      <ul className={style.list}>
        <li>
          <p className={style.id}>Id</p>
          <p className={style.name}>Username</p>
          <p className={style.avatar}>Image</p>
        </li>
        {
          users.map((item) => (
            <li key={item.id} onClick={() => {getUserDetail(item.url, item.repos_url)}}>
              <p className={style.id}>{item.id}</p>
              <p className={style.name}>{item.login}</p>
              <img className={style.avatar} src={item.avatar_url} alt=''/>
            </li>
          ))
        }
      </ul>
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
    </div>
  );
}

export default Hw1;