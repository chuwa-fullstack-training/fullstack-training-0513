import {useEffect, useState} from "react";
import style from "./hw1.module.css";
import { useNavigate } from 'react-router-dom';

interface userType {
  id: number,
  login: string,
  avatar_url: string,
  location: string,
  url: string,
  repos_url: string
}

const Users = () => {
  const [users, setUsers] = useState<userType[]>([]);
  const navigate = useNavigate();

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

  const useDetail = (name: string) => {
    navigate(`/hw1/${name}`);
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
            <li key={item.id} onClick={() => {useDetail(item.login)}}>
              <p className={style.id}>{item.id}</p>
              <p className={style.name}>{item.login}</p>
              <img className={style.avatar} src={item.avatar_url} alt=''/>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Users;