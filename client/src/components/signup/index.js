import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"

import './signup.css';
// import Dropdown from "../Dropdown/dropdown"
import API from "../../utils/API"
import { post } from "jquery";
// import FooterPage from "../footer";

// Sets the variables on a global scope, that can be exported to the following pages
let positives = [];
let negatives = [];
let score = 0;


function Signup() {

    var expressions = /^[0-9!@#$%^&*]$/;
    const history = useHistory();
    const [formObject, setFormObject] = useState({})
    const [passwords, setPasswords] = useState([])

    useEffect(() => {
        getpasswords()
    }, [])

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function getpasswords() {
        API.getPasswords().then(res =>
            setPasswords(res.data)
        ).catch(err => console.log(err))
    };

    function comparePasswords() {
        console.log(formObject.password);
        console.log(passwords[1].name);
        for (var i = 0; i < passwords.length; i++) {
            if (formObject.password === passwords[i].name) {
                negatives.push("Your password matches one of the 100 most common passwords");
            }
        }
    }

    function gradeCriteria() {
        // Checks password length
        if (formObject.password.length >= 11) {
            score += 10;
            positives.push("Your password is 11 or more characters long!")
        }
        else {
            negatives.push("Your password is less than 11 characters long")
        };
        // Checks for numbers and characters
        if (expressions.test(formObject.password)) {
            score += 10;
            positives.push("You have added special characters to your password.")
        }
        else {
            negatives.push("You should add special characters and numbers to your passwords.")
        };
        // Compares password to top 100 common passwords
        getpasswords();
        comparePasswords();
        // 47-88 Check to see if they have given up personal information
        if (!formObject.phoneNumber) {
            positives.push("You did not give out your personal phone number.");
            score += 10;
        }
        else {
            negatives.push("You should be careful giving out your personal phone number.")
        };
        if (!formObject.dateOfBirth) {
            positives.push("You did not give out your date of birth.")
            score += 10;
        }
        else {
            negatives.push("You should be careful giving out personal info such as a date of birth.")
        };
        if (!formObject.genderFemale || !formObject.genderMale || !formObject.genderNA) {
            positives.push("You did not give out personal info such as your gender.")
            score += 10;
        }
        else {
            negatives.push("You should be careful giving out personal info such as your gender.")
        };
        if (!formObject.socialNumber) {
            positives.push("You did not give out your social security number.")
            score += 20
        }
        else {
            negatives.push("Never give out your social security number unless you absolutely need to.")
        };
        if (!formObject.homeAddress) {
            positives.push("You did not give out personal information such as your home address.")
            score += 10;
        }
        else {
            negatives.push("You should be careful giving out personal info such as your gender.")
        };
        if (formObject.creditCardYes) {
            negatives.push("Be careful when linking credit cards to certain sites.")
        }
        if (formObject.creditCardNo) {
            positives.push("You did not give out your credit card information.")
            score += 10;
        };
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        // Pulls information from the form on the front end
        //Passes that data to "C:\Users\tanne\Documents\Housekeeping\Boot_camp\Homework\CyberSafe\client\src\utils\API.js" if all fields are completed
        API.saveUser({
            firstName: formObject.firstName,
            lastName: formObject.lastName,
            email: formObject.email,
            password: formObject.password
        })
        // Changing these variables based off of our grading criteria 
        gradeCriteria();
        // Defines the next route for our routing
        let path = "/results";
        // Pushes the path to the URL and directs us to that page
        history.push(path);
    }

    return (
        <div className="container my-container">
            {/* <Dropdown /> */}
            <form className="formLogin">
                <h3>Create Account</h3>
                <p className="optional">(* Optional Questions)</p>

                <div className="form-group">
                    <div className="form-label"><label className="form-text">First name</label></div>
                    <input type="text" className="form-control" placeholder="First name"
                        onChange={handleInputChange}
                        name="firstName" />
                </div>

                <div className="form-group">
                    <div className="form-label"><label className="form-text">Last name</label></div>
                    <input type="text" className="form-control" placeholder="Last name"
                        onChange={handleInputChange}
                        name="lastName" />
                </div>

                <div className="form-group">
                    <div className="form-label"><label className="form-text">Email</label></div>
                    <input type="email" className="form-control" placeholder="Enter email"
                        onChange={handleInputChange}
                        name="email" />
                </div>

                <div className="form-group">
                    <div className="form-label"><label className="form-text">Create Password</label></div>
                    <input type="password" className="form-control" placeholder="Enter password"
                        onChange={handleInputChange}
                        name="password" />
                </div>

                <div className="form-group">
                    <div className="form-label"><label className="form-text">What company are you applying with?</label></div>
                    <input type="text" className="form-control" placeholder="Company Name"
                        onChange={handleInputChange}
                        name="company" />
                </div>

                <div className="form-group">
                    <div className="form-label"><label className="form-text">What position are you applying for?</label></div>
                    <input type="text" className="form-control" placeholder="Position"
                        onChange={handleInputChange}
                        name="position" />
                </div>

                <div className="form-group">
                    <div className="form-label"><label className="form-text">What is your anticipated start date?</label></div>
                    <input type="string" className="form-control" placeholder="MM/DD/YYYY"
                        onChange={handleInputChange}
                        name="startDate" />
                </div>

                <div className="form-group">
                    <div className="form-label"><label className="form-text">What is your personal phone number?*</label></div>
                    <input type="string" className="form-control" placeholder="555-555-5555"
                        onChange={handleInputChange}
                        name="phoneNumber" />
                </div>

                <div className="form-group">
                    <div className="form-label"><label className="form-text">What is your date of birth?*</label></div>
                    <input type="string" className="form-control" placeholder="MM/DD/YYYY"
                        onChange={handleInputChange}
                        name="dateOfBirth" />
                </div>

                <div className="form-group">
                    <div className="form-label"><label className="form-text">What is your gender?*</label></div>
                    <div className="container">
                        <input type="checkbox" value="female" className="form-control check-box" placeholder="Female"
                            onChange={handleInputChange}
                            name="genderFemale" />
                        <div className="form-label"><label className="form-text">Female</label></div>
                        <input type="checkbox" value="male" className="form-control check-box" placeholder="Male"
                            onChange={handleInputChange}
                            name="genderMale" />
                        <div className="form-label"><label className="form-text">Male</label></div>
                        <input type="checkbox" value="na" className="form-control check-box" placeholder="Prefer not to disclose"
                            onChange={handleInputChange}
                            name="genderNA" />
                        <div className="form-label"><label className="form-text">Prefer not to disclose</label></div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="form-label"><label className="form-text">What is your social security number?*</label></div>
                    <input type="string" className="form-control" placeholder="Enter SNN (include hyphen)"
                        onChange={handleInputChange}
                        name="socialNumber" />
                </div>

                <div className="form-group">
                    <div className="form-label"><label className="form-text">What is your home address?*</label></div>
                    <input type="text" className="form-control" placeholder="Enter address, City, State, Zip Code"
                        onChange={handleInputChange}
                        name="homeAddress" />
                </div>

                <div className="form-group">
                    <div className="form-label"><label className="form-text">Do you want to link a credit card for in app purchases?*</label></div>
                    <div className="container">
                        <input type="checkbox" value="yes" className="form-control check-box" placeholder="Yes"
                            onChange={handleInputChange}
                            name="creditCardYes" />
                        <div className="form-label"><label className="form-text">Yes</label></div>
                        <input type="checkbox" value="no" className="form-control check-box" placeholder="No"
                            onChange={handleInputChange}
                            name="creditCardNo" />
                        <div className="form-label"><label className="form-text">No</label></div>
                    </div>
                </div>

                <button onClick={handleFormSubmit} className="btn btn-dark" id="loginBtn">
                    <Link className="create-link">Create Account</Link>
                </button>
            </form>
        </div>
    );
}

export default Signup;
// Exports these variables, saves us time of doing multiple derivative CRUD actions 
export { score };
export { positives };
export { negatives }