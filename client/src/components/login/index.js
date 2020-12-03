import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import './login.css';
import Dropdown from "../Dropdown/dropdown"
import API from "../../utils/API"
import FooterPage from "../footer";


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
            API.saveUser({
                firstName: formObject.firstName,
                lastName: formObject.lastName,
                email: formObject.email,
                password: formObject.password
            })
            let positives = []
            let negatives = []
            let score = 0
            if (formObject.password.len >= 11) {
                score += 20;
                positives.push("Your password is 11 or more characters long!")
            }
            else {
                negatives.push("Your password is less than 11 characters long")
            };
            console.log(positives, negatives, score)
            API.saveUserScore({
                score: score,
                negatives: negatives,
                positives: positives
            })
            let path = "/profile"
            history.push(path);
        }
    }


    return (
        <div className="container my-container">
            <Dropdown />
            <form className="form">
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

                <button onClick={handleFormSubmit} className="btn btn-dark mt-3 mb-5">
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