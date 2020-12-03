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
        // Pulls information from the form on the front end
        if (formObject.firstName && formObject.lastName && formObject.email && formObject.password) {
            //Passes that data to "C:\Users\tanne\Documents\Housekeeping\Boot_camp\Homework\CyberSafe\client\src\utils\API.js" if all fields are completed
            API.saveUser({
                firstName: formObject.firstName,
                lastName: formObject.lastName,
                email: formObject.email,
                password: formObject.password
            })
            //Defining variables for the UserScore model
            let positives = [];
            let negatives = [];
            let score = 0;
            // Changing these variables based off of our grading criteria 
            if (formObject.password.length >= 11) {
                score += 20;
                positives.push("Your password is 11 or more characters long!")
            }
            else {
                negatives.push("Your password is less than 11 characters long")
            };
            // Create an if statement that checks for numbers
            // Create an if statement that checks for special characters

            // Sends the data and creates the UserScore model
            // Note: We might want to add a foreign key here so that the user and userScore documents have a shared ID 
            API.saveUserScore({
                score: score,
                negatives: negatives,
                positives: positives
            });
            // Defines the next route for our routing
            let path = "/profile";
            // Pushes the path to the URL and directs us to that page
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
            <footer>
            <FooterPage/>
            </footer>
        </div>
    );
}

export default Login; 