import '../css/hw1.css';

// import axios from "axios";
import React from "react";

function UserDisplay({ idx, userid, avatar_url, username, handleClick }) {
    return (
        <li key={idx} className='user' onClick={(e) => handleClick(e, idx)}>
            <span>{userid}</span>
            &nbsp;
            <img src={avatar_url} alt="avatar" width="32" heigh="32" />
            &nbsp;
            <span>{username}</span>
        </li>
    );
}

function CardDisplay({ user }) {
    console.log(user);
    return (
        <div className='user-info-card'>
            <img src={user.avatar_url} alt="avatar" width="32" heigh="32" />
            <div>Username: {user.login}</div>
            <div>Repository: {user.repos_url}</div>
        </div>
    )
}


class Users extends React.Component {

    state = {
        users: [],
        loading: false,
        displayUserIndex: 0,
    };

    handleClick = (e, idx) => {
    this.setState({ displayUserIndex: idx });
}

    componentDidMount() {
        this.setState({ loading: true });
        fetch("https://api.github.com/users")
            .then((res) => res.json())
            .then((data) => {
                this.setState({ users: data, loading: false, displayUserIndex: 0});
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
        // axios
        //   .get("https://api.github.com/users")
        //   .then((res) => this.setState({ users: res.data }));
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        return (
            <main>
                <aside className='user-list'>
                    <ul className='user-title-wrapper'>
                        <li className='user-title'>
                            <span>ID</span>
                            &nbsp;
                            <span>Image</span>
                            &nbsp;
                            <span>Username</span>
                        </li>
                    </ul>
                    <ul className='users'>
                        {this.state.users.map((user, index) => (
                            <UserDisplay
                                key = {index}
                                idx = {index}
                                userid={user.id}
                                avatar_url={user.avatar_url}
                                username={user.login}
                                handleClick={this.handleClick}
                            />
                        ))}
                    </ul>
                </aside>
                <section className='user-info'>
                    {this.state.displayUserIndex ? <CardDisplay
                        // userid={this.state.displayUserIndex}
                        user={this.state.users[this.state.displayUserIndex]}
                    /> : <div></div>}
                </section>
            </main>

        );
    }
}

export default Users;
