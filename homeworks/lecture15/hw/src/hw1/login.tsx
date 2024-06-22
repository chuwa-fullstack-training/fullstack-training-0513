import {useState} from "react";
import { useNavigate } from "react-router-dom";
import style from "./hw1.module.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();

  const doLogin = () => {
    if (username === 'test' && password === '123456') {
      setErrMsg('');
      sessionStorage.setItem('token', 'xyz');
      navigate('/hw1');
    } else {
      setErrMsg('Username or password is incorrect');
    }
  };

  return (
    <div className="page">
      <h2>Login</h2>
      <label className={style.login_input}>
        Username
        <input value={username} onChange={(e) => {setUsername(e.target.value)}}/>
      </label>
      <label className={style.login_input}>
        Password
        <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
      </label>
      <button className={style.login_btn} onClick={doLogin}>Submit</button>
      <p className="error">{errMsg}</p>
    </div>
  );
};

export default Login;