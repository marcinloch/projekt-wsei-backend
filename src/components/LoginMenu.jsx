import Axios from "axios";
import React, { Component } from "react";

export default class LoginMenu extends Component {
    render() {
        let LoginUsername = ""
        let LoginPassword = ""

        const login = () => {
            const url = "http://localhost:5000/zaloguj";

            Axios({
                method: 'POST',
                data: {
                    username: LoginUsername,
                    password: LoginPassword
                },
                withCredentials: true,
                url
            }).then((res) => console.log(res))
        }

        return (
            <div className="mainLogin">
                <form action="">
                    <label>Sign in</label>
                    <div className="mainLogin__input-box">
                        <input placeholder="username" onChange={e => LoginUsername = e.target.value}/>
                        <input placeholder="passsword" onChange={e => LoginPassword = e.target.value}/>
                        <button type="button" onClick={login}>Login</button>
                        <p>Not registered? <span>Create an account</span> </p>
                    </div>
                </form>
            </div>
        )
    }
}
