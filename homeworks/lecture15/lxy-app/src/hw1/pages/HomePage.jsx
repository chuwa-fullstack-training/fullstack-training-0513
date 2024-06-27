import { useNavigate, Link } from "react-router-dom";

export default function HomePage() {
    const user = localStorage.getItem("user");
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("user");
        navigate('/');
    }

    return (
        <>
            <h1>Home</h1>
            {user ? (
                <>
                    <div>Welcome Username</div>
                    <button onClick={handleLogOut}>Log out</button>
                </>
            ) : (<Link to='/login'>Login</Link>)}

        </>
    )
}