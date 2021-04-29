import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
import './App.css';
import Ape from './Ape';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMsg: null
        };
    }

    displayErrorMsg(msg = "none") {
        var error = document.getElementById("errorMsg");
        if (msg == "none") {
            error.style.visibility = "hidden";
        } else if (msg != "") {
            error.style.visibility = "visible";
            error.innerHTML = msg;
        }
    }

    storeUser() {
        if (document.getElementById("username")) {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    }

    render() {
        if (localStorage.getItem("username") != null) {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            return (
                <div>
                    <Ape/>
                    {/* <input id="clearStorage" type="button" onClick={this.clearStorage}></input> */}
                </div>
            )
        }
        return (
            <div>
                <div class = "loginRow">
                    <div class = "loginCol"></div>
                    <div class = "loginColForm">
                        <form name = "form" action="" method="POST">
                            <h2>CAPE Login</h2>
                            <span>
                                <label for="username">Username:</label>
                                <input type="text" id="username" name="username" placeholder="username"></input>
                            </span>
                            <span>
                                <label for="password" id="passwordLabel">Password:</label>
                                <input type="password" id="password" name="password" title="password"></input>
                            </span>
                            <span>
                                <Router>
                                    <Route exact path = "/Ape" component = {Ape}>
                                    </Route>
                                    <Link to = "/Ape" >Login</Link>
                                </Router>
                                {/* <input id="submitButton" type="button" value="Login" onClick={this.storeUser}></input> */}
                            </span>
                            {/* <span>
                                <a href="../cs3220.html" class="loginBut">Back</a>
                            </span>   */}
                        </form>
                    </div>
                    <div class = "loginCol"></div>
                </div>
            </div>
        )
    }
}
export default App;