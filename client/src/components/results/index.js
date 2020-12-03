import React from "react";
import FooterPage from "../footer";
import './results.css';


function Results() {
    return (
        <div>
            <form className="form">
                <h1>Results</h1>
                <br />
                <h2 class="test-results">You Scored (Total Score)</h2>


                <div className="form-group password-test">
                    <label className="subject subject-password">Password Security</label>
                    <label className="results results-password">Password Results</label>
                    <br />
                    <label className="subject subject-password">Password Security</label>
                    <label className="results results-password">Password Results</label>
                </div>
                <br />
                <div className="form-group personal-test">
                    <label className="subject subject-Personal">Personal Security</label>
                    <label className="results results-Personal">Personal Results</label>
                    <br />
                    <label className="subject subject-Personal">Personal Security</label>
                    <label className="results results-Personal">Personal Results</label>
                </div>
                <br />
                <div className="form-group website-test">
                    <label className="subject subject-Website">Website Security</label>
                    <label className="results results-Website">Website Results</label>
                    <br />
                    <label className="subject subject-Website">Website Security</label>
                    <label className="results results-Website">Website Results</label>
                </div>



            </form>
            {/* <footer>
            <FooterPage/>
            </footer> */}
        </div>
    );

}
export default Results; 