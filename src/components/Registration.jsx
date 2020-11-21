import React, { Component } from "react";
import Axios from 'axios';

export default class Registration extends Component {

    state = {
        userName: '',
        registerEmail: '',
        registerPassword: '',
        registerPassword2: '',
        wasUserCreated: false
    }

    handleFormChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    register = () => {

        const url = "http://localhost:5000/zarejestrujsie";

        const { userName, registerEmail, registerPassword, registerPassword2 } = this.state;
        if (registerPassword === registerPassword2) {
            Axios({
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                },
                data: {
                    username: userName,
                    email: registerEmail,
                    password: registerPassword
                },
                withCredentials: true,
                url

            }).then((res) => console.log(res))
        }
        else console.log("rózne hasła")
    }

    render() {
        const { wasUserCreated } = this.state;
        return (
            <div className="mainLogin">
                {!wasUserCreated && <form>
                    <label>Sign up</label>
                    <div className="mainLogin__input-box">
                        <input name="userName" placeholder="username" onChange={this.handleFormChange} />
                        <input name="registerEmail" placeholder="e-mail address" onChange={this.handleFormChange} />
                        <input name="registerPassword" placeholder="password" onChange={this.handleFormChange} />
                        <input name="registerPassword2" placeholder="confirm password" onChange={this.handleFormChange} />
                        <button type="button" onClick={this.register}>Sign up</button>
                    </div>
                </form>}
                {wasUserCreated}
            </div>
        )
    }
}
