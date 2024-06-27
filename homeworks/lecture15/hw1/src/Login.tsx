import { useState } from "react";
import "./Login.css"
import { useLocation, useNavigate } from "react-router-dom";

type LoginPropType = {
    submit_handler: (username: string, password: string) => boolean
}
export default function Login(props: LoginPropType) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    return <div className="login_page_container">
        <h1>Login</h1>
        <div>Username</div>
        <input type="text" className="inputfield" value={ username } 
        onChange={(e) => setUsername(e.target.value)}/>
        <div>Password</div>
        <input type="password" className="inputfield" value={ password }
        onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={() => {
            const res = props.submit_handler(username, password); 
            console.log(res);
            
            if (res) {
                navigate(from, { replace: true});
            } 
        }}>
            Submit
        </button>
    </div>;
}