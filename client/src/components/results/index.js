import React from "react";
import FooterPage from "../footer";
import './results.css';
// import { score, positives, negatives } from "../login/index";
var score = 50;
var positives = ["y", "e", "s"];
var negatives = ["n", "o"];

function Results() {
    const posItems = positives.map((pos) =>
    <li>{pos}</li>);
    const negItems = negatives.map((neg) =>
    <li>{neg}</li>);

    return (
        <div>
            <form className="form">
                <h1>Results</h1>
                <br />
                <h2 class="test-results">You Scored {score}</h2>


                <div className="form-group password-test">
                    <label className="subject subject-password">Positives</label>
                    <ul>{posItems}</ul>
                    <br />
                    <label className="subject subject-password">Negatives</label>
                    <ul>{negItems}</ul>
                </div>
            </form>
            {/* <footer>
            <FooterPage/>
            </footer> */}
        </div>
    );
}
export default Results;

