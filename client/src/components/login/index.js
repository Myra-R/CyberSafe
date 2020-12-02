import React from "react";
import './login.css';



        function Login() {
        return (
            <div className="container">
            <form className="form">
                <h3>Login</h3>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="First name" /> 
                    <div className="form-label"><label className="form-text">First name</label></div>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last name" /> <b></b>
                    <div className="form-label"><label className="form-text">Last name</label></div>
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email" /> <b></b>
                    <div className="form-label"><label className="form-text">Email</label></div>
                </div>

                <div className="form-group">
                <input type="password" className="form-control" placeholder="Enter password" /> <b></b>
                   <div className="form-label"><label className="form-text">Password</label></div>
                </div>

            </form>
            </div>
        );
    }
export default Login; 