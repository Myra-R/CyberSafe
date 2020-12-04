import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { score } from "../login/index";


function Gauge() {
    return (
        <div>
            <GaugeChart id="gauge-chart3"
                nrOfLevels={30}
                colors={["#FF5F6D", "#FFC371"]}
                arcWidth={0.3}
                percent={score/100}
            />
        </div>
    )
}

export default Gauge;