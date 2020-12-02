import React from "react";
import './profile.css';
<<<<<<< HEAD


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

=======
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
>>>>>>> 1a6576cc71b20dc0035ef4832566e5347bbc6e32
export default Profile; 