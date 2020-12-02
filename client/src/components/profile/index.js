import React from "react";
import './profile.css';


        function Profile() {
        return (
            <form id="profile">
                <h1>Profile Section</h1>

                <div id="form-firstName">
                    <label>First name</label><br></br><br></br>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div id="form-lastName">
                    <label>Last name</label><br></br><br></br>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div id="form-company">
                    <label>What company are you applying with?</label><br></br><br></br>
                    <input type="email" className="form-control" placeholder="Company Name" />
                </div>

                <div id="form-city">
                    <label>What City were you born in?</label><br></br><br></br>
                    <input type="password" className="form-control" placeholder="Enter City" />
                </div>

                <div id="form-question">
                    <label>Other Random Questions....</label><br></br><br></br>
                    <input type="password" className="form-control" placeholder="Random Answer" />
                </div>



              
            </form>
        );
    }
export default Profile; 