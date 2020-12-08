import React from "react";
import FooterPage from "../footer";
import './results.css';
// import Gauge from "../gauge/gauge"
import GaugeChart from 'react-gauge-chart';

import { score, positives, negatives } from "../signup/index";
// import $ from "jquery";

// For test purposes only 
// let score = 1000;
// let positives = ["you done good", "kid"];
// let negatives = ["try again", "but be better", "this time"];


function Results() {

    let scorePercentage = score/100
    
    const posItems = positives.map((pos) =>
        <li>{pos}</li>);
    const negItems = negatives.map((neg) =>
        <li>{neg}</li>);

    //text results
    let text = ""

    //color coding results
    let results = ""
    if (score < 50) {
        results = "at-risk"
        text = "Your cyber security habits put you AT RISK.  Please consult the tips below to see where you need improvement."
    }
    else if (score < 100) {
        results = "adequate";
        text = "Your cyber security habits are ADEQUATE.  Please consult the tips below to see where you need improvement."
    }
    else {
        results = "safe";
        text = "You have displayed GOOD cyber security habits.  Please consult the tips below to see where you need improvement."
    };


    // scoreColor.text({score});
    // $(".test-results").append(scoreColor);


    return (
        <div>
            <form className="form">
                <h1>Results</h1>
                <br />
                <div>
                    <GaugeChart id="gauge-chart3"
                        nrOfLevels={30}
                        colors={["#FF5F6D", "#00FF00"]}
                        arcWidth={0.3}
                        percent={scorePercentage}
                    />
                </div>
                <h2 class={results} id="results">You Scored {score}/100</h2>
                <p class="result-text">{text}</p>

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
