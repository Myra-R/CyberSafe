import React from "react";
import './profile.css';
import Popup from '../popup'


function Profile() {
    return (
        <>
        {<Popup/>}

        <form className="form">
            <h3>Profile Section</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>What company are you applying with?</label>
                <input type="email" className="form-control" placeholder="Company Name" />
            </div>

            <div className="form-group">
                <label>What City were you born in?</label>
                <input type="password" className="form-control" placeholder="Enter City" />
            </div>

            <div className="form-group">
                <label>Other Random Questions....</label>
                <input type="password" className="form-control" placeholder="Random Answer" />
            </div>

        </form>
        </>
    );
}
export default Profile; 