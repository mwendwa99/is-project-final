import React, { useContext, useState } from 'react';
import AuthService from '../Service/AuthService';
import { AuthContext } from '../Context/AuthContext';
import Message from './Message';


const Login = (props) => {

    const [user, setUser] = useState({ username: "", password: "" });
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = (e) => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        AuthService.login(user).then(data => {
            const { isAuthenticated, user, message } = data;
            if (isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
            }
            else
                setMessage(message);
            props.history.push('/');
        })
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            backgroundColor: "white"
        }}>
            <form onSubmit={onSubmit}>
                <h3>please sign in</h3>
                <label htmlFor="username">username: </label>
                <input type="text"
                    name="username"
                    onChange={onChange}
                    placeholder="enter username"
                />
                <label htmlFor="password">password: </label>
                <input type="password"
                    name="password"
                    onChange={onChange}
                    placeholder="enter password"
                />
                <button type="submit">log in</button>
            </form>
            {message ? <Message message={message} /> : null}
        </div>
    )
}

export default Login
