/* eslint-disable import/no-anonymous-default-export */
export default {
    login: user => {
        return fetch('api/login-user', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json())
            .then((data => data));
    },
    register: user => {
        return fetch('api/register-user', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json())
            .then((data => data));
    },
    logout: () => {
        return fetch('user/user-logout')
            .then((res) => res.json())
            .then((data) => data)
    },
    isAuthenticated: () => {
        return fetch('user/user-logout')
            .then((res) => {
                if (res.status !== 401) {
                    return res.json().then(data => data)
                } else {
                    return { isAuthenticated: false, user: { username: '', role: '' } }
                }
            })
    }
}