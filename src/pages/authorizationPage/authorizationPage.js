import React from 'react';
import { Redirect } from 'react-router-dom';
import './authorizationPage.css';

class AuthorizationPage extends React.Component {

    state = {
        username: '',
        password: '',
        logIn: false
    }

    onInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    onLoginSubmit = () => {
        const { username, password } = this.state;
        if (username === "roma" && password === "2020") {
            this.setState({
                logIn: true
            })
        } else {
            alert("Упс...Проверьте введённые данные")
        }
    }


    render() {
        if (this.state.logIn) {
            return <Redirect to="/usersPage" />
        }
        return (
            <div class="container">
                <section id="content">
                    <form onSubmit={this.onLoginSubmit}>
                        <h1>Login Form</h1>
                        <div>
                            <input
                                type="text"
                                placeholder="Username"
                                required
                                id="username"
                                name="username"
                                onChange={this.onInputChange}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                id="password"
                                name="password"
                                onChange={this.onInputChange}
                            />
                        </div>
                        <div>
                            <input type="submit" value="Log in" />
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

export default AuthorizationPage;