import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import './login.css';
import Dropdown from "../Dropdown/dropdown"
import API from "../../utils/API"
// import FooterPage from "../footer";


function Login() {
    const history = useHistory();
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.firstName && formObject.lastName && formObject.email && formObject.password) {
            let path = "/profile"
            API.saveUser({
                firstName: formObject.firstName,
                lastName: formObject.lastName,
                email: formObject.email,
                password: formObject.password
            })
            history.push(path);
        }
    }


    return (
        <div className="container my-container">
            <Dropdown />
            <form className="formLogin">
                <h3>Login</h3>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="First name"
                        onChange={handleInputChange}
                        name="firstName" />
                    <div className="form-label"><label className="form-text">First name</label></div>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last name"
                        onChange={handleInputChange}
                        name="lastName" /> <b></b>
                    <div className="form-label"><label className="form-text">Last name</label></div>
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email"
                        onChange={handleInputChange}
                        name="email" /> <b></b>
                    <div className="form-label"><label className="form-text">Email</label></div>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Enter password"
                        onChange={handleInputChange}
                        name="password" /> <b></b>
                    <div className="form-label"><label className="form-text">Password</label></div>
                </div>

                <button onClick={handleFormSubmit} className="btn btn-dark mt-3 mb-2" id="loginBtn">
                    login
                </button>
            </form>
            {/* <footer>
            <FooterPage/>
            </footer> */}
        </div>
    );
}

export default Login; 