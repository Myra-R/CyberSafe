import React from "react";
import FooterPage from "../footer";
import './results.css';
import $ from "jquery";


// import { score, positives, negatives } from "../login/index";
var score = 190;
var positives = ["y", "e", "s"];
var negatives = ["n", "o"];

function Results() {
    const posItems = positives.map((pos) =>
    <li>{pos}</li>);
    const negItems = negatives.map((neg) =>
    <li>{neg}</li>);

    //text results
    let text = ""
    
//color coding results
    let results = ""
    if (score < 100) { 
    results=  "at-risk" 
    text= "Your cyber security habits put you AT RISK.  Please consult the tips below to see where you need improvement."
    }          

    
    else if (score < 200) {
       results = "adequate";
       text= "Your cyber security habits are ADEQUATE.  Please consult the tips below to see where you need improvement."
    }
    else {
        results = "safe";
        text= "You have displayed GOOD cyber security habits.  Please consult the tips below to see where you need improvement."
    };


    // scoreColor.text({score});
    // $(".test-results").append(scoreColor);


    return (
        <div>
            <form className="form">
                <h1>Results</h1>
                <br />
                <h2 class= {results} id= "results">You Scored {score}</h2>
                <p class= "result-text">{text}</p>


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

