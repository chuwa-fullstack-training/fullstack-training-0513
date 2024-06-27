import { Link } from "react-router-dom"
import "./Home.css"

type HomePropType = {
    isAuthenticated: boolean,
    username: string 
    handleLogout: () => void
}

export default function Home(props: HomePropType) {
    return <div className="homecontainer">
            <h1>Home</h1>
            { 
                props.isAuthenticated ? 
                <div className="homecontainer">
                    <h2>Welcome {props.username}</h2> 
                    <button onClick={ props.handleLogout }>Logout</button>
                </div> : 
                <Link className="link" to="/login">Login</Link>
            }
            
        </div>
}