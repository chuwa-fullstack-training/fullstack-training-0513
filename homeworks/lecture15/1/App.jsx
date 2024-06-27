import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/Login';
import GitHubList from './components/GitHubList';
import UserProfile from './components/UserProfile';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (username, password) => {
        if (username === 'admin' && password === 'password') {
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    );

    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login login={login} />
                </Route>
                <PrivateRoute path="/users/:login" component={UserProfile} />
                <PrivateRoute path="/users" component={GitHubList} />
                <Redirect from="/" to="/login" />
            </Switch>
        </Router>
    );
};

export default App;

