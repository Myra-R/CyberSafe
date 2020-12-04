import React from "react";
import FooterPage from "../footer";
import './results.css';
import $ from "jquery";


// import { score, positives, negatives } from "../login/index";
var score = 50;
var positives = ["y", "e", "s"];
var negatives = ["n", "o"];

function Results() {
    let scoreColor = $("<span class= 'at-risk'>");
    const posItems = positives.map((pos) =>
    <li>{pos}</li>);
    const negItems = negatives.map((neg) =>
    <li>{neg}</li>);
    
//color coding results
    if (score < 100) {
        scoreColor = $("<span class= 'at-risk'>");
    }
    else if ({score} < 200) {
        scoreColor = $("<span class= 'adequate'>");
    }
    else {
        scoreColor = $("<span class= 'safe'>");
    };


    scoreColor.text({score});
    $(".test-results").append(scoreColor);


    return (
        <div>
            <form className="form">
                <h1>Results</h1>
                <br />
                <span class="test-results">You Scored {score}</span>


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

