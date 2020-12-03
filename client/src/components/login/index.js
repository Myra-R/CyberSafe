import React, { useState, useEffect } from "react";
import './login.css';
import Dropdown from "../Dropdown/dropdown"
import API from "../../utils/API"
import FooterPage from "../footer";


function Login() {

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
                lastName: formObject.lastname,
                email: formObject.email,
                password: formObject.password
            })
        }
    }


    return (
        <div className="container">
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

            </form>
            <footer>
            <FooterPage/>
            </footer>
        </div>
    );
}

export default Login; 