import React from "react";
import './profile.css';
import Popup from '../popup'
import FooterPage from "../footer";


function Profile() {
    return (
        <div>
            {<Popup />}

            <form id="profile">
                <h3>Profile Section</h3>

                <div id="form-firstName">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div id="form-lastName">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div id="form-company">
                    <label>What company are you applying with?</label>
                    <input type="email" className="form-control" placeholder="Company Name" />
                </div>

                <div id="form-city">
                    <label>What City were you born in?</label>
                    <input type="password" className="form-control" placeholder="Enter City" />
                </div>

                <div id="form-question">
                    <label>Other Random Questions....</label>
                    <input type="password" className="form-control" placeholder="Random Answer" />
                </div>
            
                {/* <footer>
            <FooterPage/>
            </footer> */}
            </form>
            
        </div>

    );
}
export default Profile; 