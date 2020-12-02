import React from "react";
import './login.css';


function Login() {
    return (

        <form className="form">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Terms and Conditions
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <p>All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  All work and no play makes Jack a dull boy.  </p>
                </div>
            </div>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

        </form>
    );
}
export default Login; 